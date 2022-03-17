import request from "supertest";
import app from "./../../../app.js";

describe("user tests", () => {
  describe("test signup", () => {
    let user, res;
    it("have to return", async () => {
      user = {
        fullName: "karera ooolivier",
        email: "olivikarera@gmail.com",
        password: "pass12",
        confirmPassword: "pass12",
      };
      res = await request(app).post("/users").send(user);
      expect(res.body.status).toContain("success");
    });
  });
});
