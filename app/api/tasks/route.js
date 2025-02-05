import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import Task from "@/app/models/Task";


export async function GET() {
  try {
    await connectDB();
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const { title, description, dueDate } = await req.json();
    
    const newTask = new Task({
      title,
      description,
      dueDate,
      completed: false,
    });

    await newTask.save();
    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    console.error("Error creating task:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function PATCH(req) {
  try {
    await connectDB(); 

    const { id, title, description, dueDate, completed } = await req.json();
    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, dueDate, completed },
      { new: true }
    );

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
  }
}


export async function DELETE(req) {
  try {
    await connectDB();

    const { id } = await req.json();
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Task deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting task:", error);
    return NextResponse.json({ error: "Failed to delete task" }, { status: 500 });
  }
}
