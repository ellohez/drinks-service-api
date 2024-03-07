import express from "express";
import { router } from "./routes/routes";

export const app = express();
// Tell express to use its built in JSON parser
app.use(express.json());

// List our routes and handlers here (although they should be in 'routes.ts')
// Conventially the first two parameters on each handler are req and res
// The get method 'listens' for a specific HTTP verb on a specific path
app.get("/", (req, res) => res.send("Welcome to the Drinks API!"));
// app.get("/coffeelover", (req, res) => res.send("I like coffee!"));

app.use("/", router);