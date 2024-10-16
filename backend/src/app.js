import express from "express";

import { env } from "./configs/envConfigs.js";
import contriesRoutes from "./routes/countries.routes.js";

const app = express();
const PORT = env.PORT;

app.get("/", (req, res) => {
  res.send("Hello, Express.js!");
});

app.use("/countries", contriesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
