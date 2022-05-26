const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const api = require("./api/api");

app.use(cors());

app.use("/search", api);

app.use(express.static(path.join(__dirname, "dist/commodule")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/commodule/index.html"));
});

const port = 8080 || process.env.port;

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
