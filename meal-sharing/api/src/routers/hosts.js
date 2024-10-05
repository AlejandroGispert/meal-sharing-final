import express from "express";
import knex from "../database_client.js"; // Ensure you are importing the knex client correctly
// import bcrypt from "bcrypt"; // Uncomment if you are using bcrypt for password hashing

const hostsRouter = express.Router();

// Get all host entries
hostsRouter.get("/", async (req, res) => {
  const result = await knex("hosts").select("*");
  res.json(result);
  if (!result) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a single host entry by ID
hostsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const result = await knex("hosts").where({ id }).first();
  if (!result) {
    return res.status(404).json({ error: "Host entry not found" });
  }
  res.json(result);
});

// Create a new host entry
hostsRouter.post("/", async (req, res) => {
  const { name, email, phone, address, password } = req.body;

  // Hash the password for security if bcrypt is enabled
  // const hashedPassword = await bcrypt.hash(password, 10);

  const result = await knex("hosts")
    .insert({
      name,
      email,
      phone,
      address,
      password, // Replace this with 'hashedPassword' if using bcrypt
    })
    .returning("*");

  res.status(201).json(result[0]); // returning the inserted row
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
