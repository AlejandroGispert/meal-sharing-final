import express from "express";
import knex from "../database_client.js"; // Ensure you are importing the knex client correctly
// import bcrypt from "bcrypt"; // Uncomment if you are using bcrypt for password hashing

const hostsRouter = express.Router();

// Get all host entries
hostsRouter.get("/", async (req, res) => {
  try {
    const result = await knex("hosts").select("*");

    if (!result || result.length === 0) {
      return res.status(404).json({ error: "No hosts found" });
    }

    res.json(result);
  } catch (error) {
    console.error("Database error:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Get a single host entry by ID
hostsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  // Validate that `id` is a number
  if (isNaN(id)) {
    return res
      .status(400)
      .json({ error: "Invalid host ID. ID must be a number." });
  }

  try {
    const result = await knex("hosts").where({ id }).first();

    if (!result) {
      return res.status(404).json({ error: "Host not found." });
    }

    res.json(result);
  } catch (error) {
    console.error("Error fetching host:", error.message);
    res.status(500).json({ error: "Internal server error." });
  }
});

// Create a new host entry
hostsRouter.post("/", async (req, res) => {
  const { full_name, email, phone, address, password, details } = req.body;

  // Hash the password for security if bcrypt is enabled
  // const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await knex("hosts").insert({
      full_name,
      email,
      phone,
      address,
      password,
      details,
      created_at: knex.fn.now(), // Replace this with 'hashedPassword' if using bcrypt
    });

    res.status(201).send("New Meal created successfully.");
  } catch (error) {
    console.error("Error creating meal:", error);
    res.status(500).send("Error creating meal.");
  }
});

// Update an existing host entry
hostsRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address, password } = req.body;

  // const hashedPassword = await bcrypt.hash(password, 10); // Uncomment if using bcrypt

  const result = await knex("hosts").where({ id }).update(
    {
      name,
      email,
      phone,
      address,
      password, // Replace this with 'hashedPassword' if using bcrypt
    },
    ["*"] // Postgres-specific syntax to return updated row
  );

  if (!result.length) {
    return res.status(404).json({ error: "Host entry not found" });
  }

  res.json(result[0]);

  // res.status(500).json({ error: "Internal server error" });
});

// Delete a host entry by ID
hostsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const result = await knex("hosts").where({ id }).del().returning("*");

  if (!result.length) {
    return res.status(404).json({ error: "Host entry not found" });
  }

  res.json({ message: "Host entry deleted successfully", host: result[0] });

  // res.status(500).json({ error: "Internal server error" });
});

export default hostsRouter;
