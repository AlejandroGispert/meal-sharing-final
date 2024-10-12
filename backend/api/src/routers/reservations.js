import express from "express";
import knex from "../database_client.js";
// This router can be deleted once you add your own router
const reservationsRouter = express.Router();

reservationsRouter.get("/", async (req, res) => {
  const allReservations = await knex
    .select("*")
    .from("Reservation")
    .orderBy("id", "ASC");

  if (allReservations.length > 0) {
    res.send(allReservations);
  } else {
    res.send([]);
  }
});

reservationsRouter.post("/", async (req, res) => {
  const {
    contact_email,
    contact_name,
    contact_phonenumber,
    meal_id,
    number_of_guests,
  } = req.query; // Use req.body to properly capture POST body data

  if (
    !contact_email ||
    !contact_name ||
    !contact_phonenumber ||
    !meal_id ||
    !number_of_guests
  ) {
    return res.status(400).send("All fields are required.");
  }

  try {
    await knex("Reservation").insert({
      contact_email,
      contact_name,
      contact_phonenumber,
      meal_id,
      number_of_guests, // This must be provided
      created_date: knex.fn.now(), // Add created_date with current timestamp
    });

    res.status(201).send("Reservation created successfully.");
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).send("Error creating reservation.");
  }
});

reservationsRouter.get("/:id", async (req, res) => {
  const id = req.params.id;

  const fetchedItem = await knex
    .select("*")
    .from("Reservation")
    .where("id", id);

  if (fetchedItem.length > 0) {
    res.send(fetchedItem);
  } else {
    res.send("No data found in that reservation ID");
  }
});

reservationsRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const {
    contact_email,
    contact_name,
    contact_phonenumber,
    meal_id,
    number_of_guests,
  } = req.body; // Changed to req.body

  await knex("Reservation").where({ id: id }).update({
    contact_email,
    contact_name,
    contact_phonenumber,
    meal_id,
    number_of_guests,
  });

  res.send("The database has been updated");
});

reservationsRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await knex("Reservation").where("id", id).del();

  res.send("the item has been deleted");
});

export default reservationsRouter;
