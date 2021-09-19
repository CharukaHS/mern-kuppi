import { Router } from "express";
import { FetchTodos, SaveTodo } from "../controller/todo.controller";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await FetchTodos();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// todo/new
router.post("/new", async (req, res) => {
  const { title, description } = req.body;
  try {
    await SaveTodo(title, description);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;
