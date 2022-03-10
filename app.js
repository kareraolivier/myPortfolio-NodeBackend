import express from "express";
import userRouter from "./src/users/routes/userRoutes.js";
import blogRouter from "./src/blog/router/blog.router.js";

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/blog", blogRouter);

export default app;
