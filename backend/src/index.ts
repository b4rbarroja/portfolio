import "dotenv/config";
import express, { type Express } from "express";
import cors from "cors"; // 1. استيراد المكتبة

import projectsRouter from "../src/routes/projects.ts";
import errorHandler from "./middleware/errorHandler.ts";
import contactRoutes from "./routes/contact.ts";
import blogRoutes from "./routes/blogs.ts";
import authROutes from "./routes/auth.ts";

const app: Express = express();
app.use(cors());

app.use(express.json());

app.use("/api/auth", authROutes);
app.use("/api/projects", projectsRouter);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
export default app;
