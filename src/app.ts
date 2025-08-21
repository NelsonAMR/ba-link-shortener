import express from "express";
import cors from "cors";
import { linkRoutes, userRoutes } from "./routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/links", linkRoutes);

export default app;
