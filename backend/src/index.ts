import "dotenv/config";
import express, { type Express, type Request, type Response } from 'express';
import projectsRouter from "../src/routes/projects.ts"
import errorHandler from "./middleware/errorHandler.ts";
import contactRoutes from "./routes/contact.ts";
import blogRoutes from "./routes/blogs.ts";

const app : Express = express()

app.use(express.json())

app.use("/projects", projectsRouter)
app.use("/blogs",blogRoutes );
app.use("/contact", contactRoutes);

app.use(errorHandler)
app.listen(3000, ()=>{
    console.log("listening rn bro")
})