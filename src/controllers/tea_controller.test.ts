import request from "supertest";
import { app } from "../app";

describe("GET /tea", () => {
  test("should return correct object with the passed in param", async () => {
    const res = await request(app).get("/tea").query({ teaType: "Yorkshire" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      niceCupOf: "Yorkshire tea",
    });
  });
  test("should ", () => {});
});
