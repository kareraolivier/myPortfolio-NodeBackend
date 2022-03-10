import express from "express";
import userRouter from "./src/users/routes/userRoutes.js";
import blogRouter from "./src/blog/router/blog.router.js";
import emailRouter from "./src/emails/router/email.router.js";

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/emails", emailRouter);

export default app;
