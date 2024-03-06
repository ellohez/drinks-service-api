import { Request, Response } from "express";
import * as coffeeService from "../services/coffee_service";

export const getCoffee = async (
  // Request takes multiple generic parameters so that we can specify
  // the exact types. Here, we only care about the query params = fourth parameter
  req: Request<object, object, object, { coffeeName: string | undefined }>,
  res: Response
) => {
  const { coffeeName } = req.query;
  const coffee = coffeeService.getCoffee(coffeeName);
  res.json(coffee).status(200);
};
