import request from "supertest";
import app from "../../../";

describe("user tests", () => {
  describe("test signup", () => {
    let user, res;
    it("have to return", async () => {
      user = {
        fullName: "kareraooolivierwwww",
        email: "olivikarww@gmail.com",
        password: "pas12",
        confirmPassword: "pas12",
      };
      res = await request(app).post("/api/v1/users").send(user);
      expect(res.body.message).toBe("hello");
    });
  });
});
