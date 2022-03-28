import request from "supertest";
import app from "../../../app";

describe("user subscribe", () => {
  describe("test sub", () => {
    let sub, res;
    it("have to return", async () => {
      sub = {
        email: "olivikarwty@gmail.com",
      };
      res = await request(app).post("/api/v1/subscrib").send(sub);
      expect(res.body.message).toBe("hello");
    });
  });
});
