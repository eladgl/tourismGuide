import express from "express";

import crypto from "crypto"; // For generating random tokens

import applyMiddleware from "./middleware/middleware.js";
import routes from "./routes/index.js";

import config from "./access/configs/config.js";

const app = express();
const port = process.env.PORT || 3001;

applyMiddleware(app);

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running at ${config.URL}:${port}`);
});
