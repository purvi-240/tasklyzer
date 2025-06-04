"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { CirclePlus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import TodoModal from "@/components/todoModal";
import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";
import { deleteTodo, getTodos } from "@/api";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Task = {
  id: number;
  title: string;
  description: string;
  due_date: string;
  completed: boolean;
};

// const dummyTasks: Task[] = [
//   {
//     id: 1,
//     title: "Task 1",
//     description: "Complete project documentation",
//     due_date: "2025-05-25",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "Task 2",
//     description: "Fix login page bug",
//     due_date: "2025-05-23",
//     completed: true,
//   },
//   {
//     id: 3,
//     title: "Task 3",
//     description: "Prepare presentation slides",
//     due_date: "2025-05-27",
//     completed: false,
//   },
//   {
//     id: 4,
//     title: "Task 4",
//     description: "Team meeting with backend developers",
//     due_date: "2025-05-22",
//     completed: true,
//   },
//   {
//     id: 5,
//     title: "Task 5",
//     description: "Review pull requests",
//     due_date: "2025-05-24",
//     completed: false,
//   },
//   {
//     id: 6,
//     title: "Task 6",
//     description: "Integrate payment gateway",
//     due_date: "2025-05-28",
//     completed: false,
//   },
//   {
//     id: 7,
//     title: "Task 7",
//     description: "Send weekly report",
//     due_date: "2025-05-21",
//     completed: true,
//   },
//   {
//     id: 8,
//     title: "Task 8",
//     description: "Optimize database queries",
//     due_date: "2025-05-26",
//     completed: false,
//   },
//   {
//     id: 9,
//     title: "Task 9",
//     description: "Deploy new version to staging",
//     due_date: "2025-05-22",
//     completed: true,
//   },
//   {
//     id: 10,
//     title: "Task 10",
//     description: "Design landing page",
//     due_date: "2025-05-30",
//     completed: false,
//   },
//   {
//     id: 11,
//     title: "Task 11",
//     description: "Learning Gen AI",
//     due_date: "2025-05-30",
//     completed: false,
//   },
// ];

const TodoPage = () => {
  const [addModal, setAddModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasksList, setFilteredTasksList] = useState<Task[]>([]);
  const [search, setSearch] = useState("");

  const fetchTodos = () => {
    getTodos()
      .then((newTodos) => setTasks(newTodos))
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getTodos()
      .then((tasksFromBackend) => {
        setTasks(tasksFromBackend);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filteredTasks = tasks.filter((task: Task) => {
      if (task.title.includes(search)) return true;
      else {
        return false;
      }
    });
    setFilteredTasksList(filteredTasks);
  }, [search]);

  return (
    <div className="p-6 bg-slate-100">
      <div className="flex justify-between  items-center">
        <Image src="/assets/logo.png" alt="Logo" width={120} height={120} />
        <Button variant="default" size="sm" onClick={() => setAddModal(true)}>
          <CirclePlus className="mr-1" /> Add Task
        </Button>
      </div>

      <Input
        type="search"
        className="mb-4"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search Name"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Completed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {search !== ""
            ? filteredTasksList.map((task, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{task.title}</TableCell>
                    <TableCell>{task.description}</TableCell>
                    <TableCell>{task.due_date}</TableCell>
                    <TableCell>
                      <Checkbox className="" checked={task.completed} />
                    </TableCell>
                    {/* <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEditModal(true);
                      console.log("Edit", task);
                    }}
                    // color=" text-muted-foreground"
                    className="flex items-center gap-1 text-blue-500 border-blue-300 hover:text-blue-600 hover:border-blue-400"
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                </TableCell> */}
                    <TableCell>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="flex items-center gap-1 bg-red-100 text-black-700 hover:bg-red-400"
                        onClick={async () => {
                          const response = await deleteTodo(task.id.toString());
                          fetchTodos();
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            : tasks.map((task, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{task.title}</TableCell>
                    <TableCell>{task.description}</TableCell>
                    <TableCell>{task.due_date}</TableCell>
                    <TableCell>
                      <Checkbox className="" checked={task.completed} />
                    </TableCell>
                    {/* <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEditModal(true);
                      console.log("Edit", task);
                    }}
                    // color=" text-muted-foreground"
                    className="flex items-center gap-1 text-blue-500 border-blue-300 hover:text-blue-600 hover:border-blue-400"
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                </TableCell> */}
                    <TableCell>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="flex items-center gap-1 bg-red-100 text-black-700 hover:bg-red-400"
                        onClick={async () => {
                          const response = await deleteTodo(task.id.toString());
                          fetchTodos();
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
        </TableBody>
      </Table>
      <TodoModal
        open={addModal}
        onOpenChange={setAddModal}
        isEdit={false}
        fetchTodos={fetchTodos}
      />

      {/* <TodoModal open={editModal} onOpenChange={setEditModal} isEdit={true} /> */}
    </div>
  );
};

export default TodoPage;
