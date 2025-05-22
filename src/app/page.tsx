"use client";
import React, { useState } from "react";
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

type Task = {
  name: string;
  description: string;
  due_date: string;
  completed: boolean;
};
const dummyTasks: Task[] = [
  {
    name: "Task 1",
    description: "Complete project documentation",
    due_date: "2025-05-25",
    completed: false,
  },
  {
    name: "Task 2",
    description: "Fix login page bug",
    due_date: "2025-05-23",
    completed: true,
  },
  {
    name: "Task 3",
    description: "Prepare presentation slides",
    due_date: "2025-05-27",
    completed: false,
  },
  {
    name: "Task 4",
    description: "Team meeting with backend developers",
    due_date: "2025-05-22",
    completed: true,
  },
  {
    name: "Task 5",
    description: "Review pull requests",
    due_date: "2025-05-24",
    completed: false,
  },
  {
    name: "Task 6",
    description: "Integrate payment gateway",
    due_date: "2025-05-28",
    completed: false,
  },
  {
    name: "Task 7",
    description: "Send weekly report",
    due_date: "2025-05-21",
    completed: true,
  },
  {
    name: "Task 8",
    description: "Optimize database queries",
    due_date: "2025-05-26",
    completed: false,
  },
  {
    name: "Task 9",
    description: "Deploy new version to staging",
    due_date: "2025-05-22",
    completed: true,
  },
  {
    name: "Task 10",
    description: "Design landing page",
    due_date: "2025-05-30",
    completed: false,
  },
  {
    name: "Task 11",
    description: "Learning Gen AI",
    due_date: "2025-05-30",
    completed: false,
  },
];

const TodoPage = () => {
  const [addModal, setAddModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  return (
    <div className="p-6 bg-slate-100">
      <div className="flex justify-between  items-center">
        <Image src="/assets/logo.png" alt="Logo" width={120} height={120} />
        <Button variant="default" size="sm" onClick={() => setAddModal(true)}>
          <CirclePlus className="mr-1" /> Add Task
        </Button>
      </div>
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
          {dummyTasks.map((task, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.due_date}</TableCell>
                <TableCell>
                  <Checkbox className="" checked={task.completed} />
                </TableCell>
                <TableCell>
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
                  {/* <Button
                    variant="destructive"
                    size="sm"
                    className="flex items-center gap-1 bg-red-100 text-black-700 hover:bg-red-400"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button> */}
                </TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="flex items-center gap-1 bg-red-100 text-black-700 hover:bg-red-400"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TodoModal open={addModal} onOpenChange={setAddModal} isEdit={false} />

      <TodoModal open={editModal} onOpenChange={setEditModal} isEdit={true} />
    </div>
  );
};

export default TodoPage;
