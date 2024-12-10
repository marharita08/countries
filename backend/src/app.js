import express from "express";
import cors from "cors";

import contriesRoutes from "./routes/countries.routes.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";

const app = express();

app.use(cors());

app.use("/countries", contriesRoutes);
app.use(errorHandler);

export default app;
