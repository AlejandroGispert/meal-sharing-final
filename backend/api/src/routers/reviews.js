import express from "express";
import knex from "../database_client.js";

const reviewsRouter = express.Router();

reviewsRouter.get("/", async (req, res) => {
  const allReviews = await knex.select("*").from("Review").orderBy("id", "ASC");

  if (allReviews.length > 0) {
    res.send(allReviews);
  } else {
    res.sendStatus("401");
  }
});

// ('Buenisimo', 'Italiano perfecctisima la mama del la comida', 1,5),('thunder', 'the food was stormy', 2,3)
reviewsRouter.post("/", async (req, res) => {
  const { description, meal_id, stars, title } = req.query; // changed to req.body

  if (!description || !meal_id || !stars || !title) {
    return res.status(400).send("All fields are required.");
  }

  try {
    await knex("Review").insert({
      description,
      meal_id,
      stars,
      title,
      created_date: knex.fn.now(),
    });

    res.status(201).send("Review created successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating review.");
  }
});

reviewsRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const fetchedReview = await knex.select("*").from("Review").where("id", id);

  if (fetchedReview) {
    res.send(fetchedReview);
  } else {
    res.sendStatus("401");
  }
});

reviewsRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { description, meal_id, stars, title } = req.body; // changed to req.body

  await knex("Review").where({ id: id }).update({
    description,
    meal_id,
    stars,
    title,
  });
  res.send("The review database has been updated");
});
reviewsRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await knex("Review").where("id", id).del();

  res.send("the review has been deleted");
});

export default reviewsRouter;
