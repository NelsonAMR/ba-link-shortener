import express from "express";
import cors from "cors";
import { userRoutes } from "./routes/index.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(userRoutes);

export default app;
