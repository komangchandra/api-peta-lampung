import express from "express";
import cors from "cors";
import "dotenv/config";

// Import router
import KabupatenRoute from "./src/routes/KabupatenRoute.js";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Test");
});

app.use(cors());
app.use(express.json());

app.use(KabupatenRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
