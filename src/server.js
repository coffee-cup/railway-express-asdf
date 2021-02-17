const express = require("express");

const port = process.env.PORT || 4000;
const app = express();

app.get("/", async (req, res) => {
  console.log(`[${new Date().toISOString()}] Hit!`);
  res.send("Hello Railway!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
