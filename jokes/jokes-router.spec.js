const request = require("supertest");
const db = require("../database/dbConfig");
const server = require("../api/server");

describe("GET RQ /api/jokes", () => {
  let token;
  beforeAll(async () => {
    await db("users").truncate();
    let res = await request(server)
      .post("/api/auth/register")
      .send({ username: "bob", password: "pass" });
    token = res.body.token;
  });

  test("RQ with token in header returns status 200", async () => {
    let res = await request(server)
      .get("/api/jokes")
      .set("authorization", token);
    expect(res.status).toBe(200);
  });

  test("No token returns status 401", async () => {
    let res = await request(server).get("/api/jokes");
    expect(res.status).toBe(401);
  });
});
