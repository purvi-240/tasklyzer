"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Dialog } from "../ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";

const TodoModal = (props) => {
  const { open, onOpenChange } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date>();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="backdrop-blur-sm bg-black/30 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full h-full p-6 rounded-lg shadow-xl">
        <Card className="w-[350px] p-8">
          <CardHeader>
            <CardTitle className="text-center">Create Todo</CardTitle>
          </CardHeader>

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
            <Button className=" bg-blue-200 hover:bg-blue-400 text-black-800 font-medium">
              Add Todo
            </Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default TodoModal;
