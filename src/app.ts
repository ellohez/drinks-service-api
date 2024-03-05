import express from "express";
export const app = express();
// List our routes and handlers here
// Conventially the first two parameters on each handler are req and res
app.get("/", (req, res) => res.send("Welcome to the Drinks API!"));
