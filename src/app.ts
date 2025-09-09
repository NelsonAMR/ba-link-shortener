import express from "express";
import cors from "cors";
import { linkRoutes, redirectRoutes, userRoutes } from "./routes";
import { authorize } from "./middlewares/authorize";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", redirectRoutes);
app.use("/users", authorize, userRoutes);
app.use("/links", authorize, linkRoutes);

export default app;
