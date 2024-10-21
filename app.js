import express from "express";
import cors from "cors";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

// Import router
import KabupatenRoute from "./src/routes/KabupatenRoute.js";

const app = express();
const port = 5000;

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Test");
});

app.use(express.json());

app.use(KabupatenRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
