import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);

mongoose.connect(DB).then(() => console.log("Database connected successfuly"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT} ...`));
