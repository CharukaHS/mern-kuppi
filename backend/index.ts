import express from "express";
import mongoose from "mongoose";

import todoRoutes from "./routes/todo.routes";

const app = express();
app.use(express.json());

app.use("/todo", todoRoutes);

app.get("/", (req, res) => {
  res.send("Hello from /");
});

const PORT = 3001;
app.listen(PORT, async () => {
  console.log("App is listening on port", PORT);
  try {
    await mongoose.connect("mongodb://localhost:27017/todos", {
      auth: { username: "root", password: "example" },
      authSource: "admin",
    });
    console.log("Connected to mongo db");
  } catch (error) {
    console.error("Error connecting to mongodb", error);
  }
});
