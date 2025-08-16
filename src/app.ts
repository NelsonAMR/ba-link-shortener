import express from "express";
import cors from "cors";
import { userRoutes } from "./routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);

export default app;
