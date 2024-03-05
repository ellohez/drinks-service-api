import express from "express";
export const app = express();
// List our routes and handlers here
// Conventially the first two parameters on each handler are req and res
// The get method 'listens' for a specific HTTP verb on a specific path
app.get("/", (req, res) => res.send("Welcome to the Drinks API!"));
app.get("/coffeelover", (req, res) => res.send("I like coffee!"));
