import "dotenv/config";
import express, { type Express } from "express";
import cors from "cors"; // 1. استيراد المكتبة

import projectsRouter from "../src/routes/projects.ts";
import errorHandler from "./middleware/errorHandler.ts";
import contactRoutes from "./routes/contact.ts";
import blogRoutes from "./routes/blogs.ts";
import authROutes from "./routes/auth.ts";

const app: Express = express();
const PORT = process.env.PORT;
app.use(cors());

app.use(express.json());

app.use("/api/auth", authROutes);
app.use("/projects", projectsRouter);
app.use("/blogs", blogRoutes);
app.use("/contact", contactRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log("listening rn bro");
});
