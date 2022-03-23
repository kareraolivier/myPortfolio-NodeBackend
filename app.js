import express from "express";
import userRouter from "./src/users/routes/userRoutes.js";
import blogRouter from "./src/blog/router/blog.router.js";
import emailRouter from "./src/emails/router/email.router.js";
import subscribRouter from "./src/subscribers/router/sub.router.js";
import commentRouter from "./src/comment/router/comment.router.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/emails", emailRouter);
app.use("/api/v1/subscrib", subscribRouter);
app.use("/api/v1/comments", commentRouter);

export default app;
