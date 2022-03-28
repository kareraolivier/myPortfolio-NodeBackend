import request from "supertest";
import app from "../../../app";

describe("user email", () => {
  describe("test createEmail", () => {
    let emails, res;
    it("have to return", async () => {
      emails = {
        email: "olivikarwwnn@gmail.com",
        message: "kareraooolivierwwww",
      };
      res = await request(app).post("/api/v1/emails").send(emails);
      expect(res.body.message).toBe("hello");
    });
  });
});
