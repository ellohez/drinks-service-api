import request from "supertest";
import { app } from "../app";

describe("GET /coffee", () => {
  test("should return correct object with default param", async () => {
    // The .query syntax is specific to supertest
    // In the real world, perhaps this would be supplied via a call to fetch in the browser??
    const res = await request(app)
      .get("/coffee")
      .query({ coffeeName: "Latte" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Latte",
    });
  });

  test("should return correct object with a different param", async () => {
    const res = await request(app)
      .get("/coffee")
      .query({ coffeeName: "Cappuccino" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Cappuccino",
    });
  });

  test("should return default - latte if no coffee name is specified", async () => {
    // No query param with coffee name specified
    const res = await request(app).get("/coffee");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Latte",
    });
  });
});

describe("GET / coffeelover", () => {
  // test("should return the correct response", async () => {
  //   const res = await request(app).get("/coffeelover");
  //   expect(res.statusCode).toEqual(200);
  // });
  test("GET should return correct message", async () => {
    const res = await request(app).get("/coffeelover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I like coffee!");
  });
});

