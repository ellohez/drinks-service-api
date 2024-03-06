import request from "supertest";
import { app } from "../app";
test("GET /coffee should return correct object", async () => {
  // The .query syntax is specific to supertest
  // In the real world, perhaps this would be supplied via a call to fetch in the browser??
  const res = await request(app).get("/coffee").query({ coffeeName: "Latte" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Latte",
  });
});
