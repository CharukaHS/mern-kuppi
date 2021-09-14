import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from /");
});

app.listen(3001, () => {
  console.log("Backend is running");
});
