"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardFooter } from "../ui/card";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { addTodo } from "@/api";

const TodoModal = (props: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isEdit: boolean;
}) => {
  const { open, onOpenChange, isEdit } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date>();

  const createTodo = async () => {
    const response = await addTodo(title, description, date);
    console.log("todo created");
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="justify-items-center bg-blue-100">
        <DialogTitle>{isEdit ? "Edit Todo" : "Create Todo"}</DialogTitle>
        <Card className="w-[350px] p-8">
          <div className="mb-3">
            <Label htmlFor="">Title</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter todo title"
            />
          </div>

          <div className="mb-5">
            <Label htmlFor="">Task Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description (optional)"
            />
          </div>

          <div className="mb-5">
            <Label htmlFor="">Due Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px]">
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </PopoverContent>
            </Popover>
          </div>
          <div></div>
          <CardFooter>
            <Button
              onClick={createTodo}
              className="hover:bg-[#0077b6] bg-[#0096c7] text-white font-bold"
            >
              Add Todo
            </Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default TodoModal;
