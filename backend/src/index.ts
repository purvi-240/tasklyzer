import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import { Todo } from "./entity/Todo";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized");

    const todoRepo = AppDataSource.getRepository(Todo);

    app.get("/todos", async (req, res) => {
      const todos = await todoRepo.find();
      res.json(todos);
    });

    app.post("/todos", async (req, res) => {
      const { title, description, due_date, completed=false } = req.body;
      const todo = todoRepo.create({ title, description, due_date, completed });
      const saved = await todoRepo.save(todo);
      res.status(201).json(saved);
    });

    app.delete("/todos/:id", async (req, res) => {
      const id = parseInt(req.params.id);
      const result = await todoRepo.delete(id);
      res.json({ deleted: result.affected === 1 });
    });

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
