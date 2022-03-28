import request from "supertest";
import app from "../../../app";

describe("blog tests", () => {
  describe("test createBlogs", () => {
    let blog, res;
    it("have to return", async () => {
      blog = {
        title: "kareraooolivierwwww",
        blog: "olivikarwwnn@gmail.com",
      };
      res = await request(app).post("/api/v1/blogs").send(blog);
      expect(res.body.message).toBe("hello");
    });
  });
});
