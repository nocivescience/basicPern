import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/tasks.controller.js";

const router = Router();

router.get("/inicio", (req, res) => {
  res.send("Bienvenido a la API de Tareas");
});

// create a task
router.post("/tasks", createTask);

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;
