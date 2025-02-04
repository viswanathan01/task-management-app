"use client";
import { useState, useEffect } from "react";

interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        completed: false,
        dueDate: new Date().toISOString(),
      }),
    });
    if (res.ok) {
      setTitle("");
      setDescription("");
      fetchTasks();
    }
  };

  const toggleCompletion = async (taskId: string, currentStatus: boolean) => {
    const res = await fetch("/api/tasks", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: taskId,
        completed: !currentStatus,
      }),
    });
    if (res.ok) {
      fetchTasks(); // Refresh tasks after toggling completion
    }
  };

  const deleteTask = async (taskId: string) => {
    const res = await fetch("/api/tasks", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: taskId,
      }),
    });
    if (res.ok) {
      fetchTasks(); // Refresh tasks after deleting
    }
  };

  return (
    <main className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen">
      <h1 className="text-5xl text-cyan-400 font-extrabold mb-8 text-center drop-shadow-2xl transition duration-500 ease-in-out transform hover:scale-110">
        Task Manager
      </h1>

      <form onSubmit={addTask} className="mb-8 flex justify-center items-center space-x-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-4 bg-gray-800 text-cyan-400 rounded-lg shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-4 bg-gray-800 text-cyan-400 rounded-lg shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
          required
        />
        <button
          type="submit"
          className="bg-cyan-600 text-white p-4 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out"
        >
          Add Task
        </button>
      </form>

      <ul className="space-y-6">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="bg-gray-900 p-6 rounded-xl shadow-2xl flex items-center justify-between transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl text-cyan-400 font-bold">{task.title}</h2>
              <p className="text-gray-400">{task.description}</p>
              <p
                className={`text-sm font-semibold ${task.completed ? "text-gray-500" : "text-red-400"}`}
              >
                {task.completed ? "Completed" : "Incomplete"}
              </p>
            </div>
            <div className="space-x-4">
              <button
                className="bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600 transition-all duration-300"
                onClick={() => toggleCompletion(task._id, task.completed)}
              >
                {task.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button
                className="bg-red-600 text-white p-3 rounded-md hover:bg-red-700 transition-all duration-300"
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
