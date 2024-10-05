import express from "express";
import knex from "../database_client.js"; // Ensure this is set up for PostgreSQL

const mealsRouter = express.Router();

mealsRouter.get("/", async (req, res) => {
  try {
    let query = knex("Meal")
      .select("Meal.*", "images.image_url") // Select all fields from Meal and image_url from images
      .leftJoin("images", "Meal.image_id", "images.id");

    const maxPriceApi = parseFloat(req.query.maxPrice);
    const availableReservationsApi = req.query.availableReservations === "true";
    const titleApi = req.query.title?.trim();
    const dateAfterApi = req.query.dateAfter;
    const dateBeforeApi = req.query.dateBefore;
    const limitApi = parseInt(req.query.limit, 10);
    const sortKeyApi = req.query.sortKey;
    const sortDirApi =
      req.query.sortDir?.toLowerCase() === "desc" ? "desc" : "asc";

    const validSortKeys = [
      "title",
      "when",
      "max_reservations",
      "price",
      "created_date",
    ];

    // Apply filters based on query parameters
    if (!isNaN(maxPriceApi)) {
      query = query.where("price", "<", maxPriceApi);
    }

    if (titleApi) {
      query = query.where("title", "ILIKE", `%${titleApi}%`); // ILIKE for case-insensitive matching in PostgreSQL
    }

    if (dateAfterApi) {
      query = query.where("created_date", ">", dateAfterApi);
    }

    if (dateBeforeApi) {
      query = query.where("created_date", "<", dateBeforeApi);
    }

    if (validSortKeys.includes(sortKeyApi)) {
      query = query.orderBy(sortKeyApi, sortDirApi);
    }

    if (!isNaN(limitApi)) {
      query = query.limit(limitApi);
    }

    // Get available reservations directly in the meal query
    if (availableReservationsApi) {
      query = query.whereExists(function () {
        this.select("*")
          .from("Reservation")
          .whereRaw("Meal.id = Reservation.meal_id")
          .havingRaw(
            "Meal.max_reservations - SUM(Reservation.number_of_guests) > 0"
          )
          .groupBy("Reservation.meal_id");
      });
    }

    const meals = await query; // Execute the query

    if (meals.length > 0) {
      res.json(meals); // Send the found meals as a JSON response
    } else {
      res.status(404).json({ message: "No meals found" }); // Handle case with no meals found
    }
  } catch (error) {
    console.error("Error fetching meals:", error);
    res.status(500).send({ error: "An error occurred while fetching meals" });
  }
});

mealsRouter.post("/", async (req, res) => {
  const { title, description, location, max_reservations, price } = req.body; // Changed to req.body for POST requests
  try {
    await knex("Meal").insert({
      title,
      description,
      location,
      max_reservations,
      price,
      created_date: new Date(), // Ensure date is in the right format for PostgreSQL
    });

    res.status(201).send("New Meal created successfully.");
  } catch (error) {
    console.error("Error creating meal:", error);
    res.status(500).send("Error creating meal.");
  }
});

mealsRouter.get("/:id", async (req, res) => {
  const id = req.params.id;

  const fetchedItem = await knex("Meal")
    .select("Meal.*", "images.image_url") // Select fields from both tables
    .leftJoin("images", "Meal.image_id", "images.id") // Perform a LEFT JOIN
    .where("Meal.id", id)
    .first(); // Use .first() to get a single object instead of an array

  if (fetchedItem) {
    res.json(fetchedItem);
  } else {
    res.status(404).send("No data found for that meal ID");
  }
});

mealsRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { title, description, location, max_reservations, price } = req.body; // Changed to req.body for POST requests

  const updated = await knex("Meal").where({ id }).update({
    title,
    description,
    location,
    max_reservations,
    price,
    updated_date: new Date(), // Updated date for modifications
  });

  if (updated) {
    res.send("The meal has been updated");
  } else {
    res.status(404).send("Meal not found");
  }
});

mealsRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const deleted = await knex("Meal").where("id", id).del();

  if (deleted) {
    res.send("The item has been deleted");
  } else {
    res.status(404).send("Meal not found");
  }
});

mealsRouter.get("/:meal_id/reviews", async (req, res) => {
  const mealId = req.params.meal_id;

  const fetchedReviews = await knex("Review").where("meal_id", mealId);

  if (fetchedReviews.length > 0) {
    res.json(fetchedReviews);
  } else {
    res.status(404).send("No reviews found for that meal ID");
  }
});

// If you need to handle review updates, provide implementation here
mealsRouter.put("/:meal_id/reviews", async (req, res) => {
  const mealId = req.params.meal_id;
  const { content } = req.body; // Assume reviews have content

  const updated = await knex("Review")
    .where("meal_id", mealId)
    .update({ content });

  if (updated) {
    res.send("The review has been updated");
  } else {
    res.status(404).send("No review found for that meal ID");
  }
});

mealsRouter.delete("/:meal_id/reviews", async (req, res) => {
  const mealId = req.params.meal_id;

  const deleted = await knex("Review").where("meal_id", mealId).del();

  if (deleted) {
    res.send("The reviews have been deleted");
  } else {
    res.status(404).send("No reviews found for that meal ID");
  }
});

export default mealsRouter;
