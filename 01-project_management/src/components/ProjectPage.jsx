import { useRef } from "react";

export default function ProjectPage({ title, description, dueDate, tasks }) {
  const task = useRef();

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-stone-800">{title}</h1>
        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
          Delete
        </button>
      </div>

      <p className="text-stone-500 text-sm mb-4">{dueDate}</p>
      <p className="text-stone-700 whitespace-pre-wrap mb-8">{description}</p>

      <hr className="border-stone-300 mb-8" />

      <h2 className="text-2xl font-bold text-stone-800 mb-4">Tasks</h2>
      <input
        type="text"
        ref={task}
        className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent"
        placeholder="Add a new task..."
      />
      <div className="mt-4 flex items-center gap-3">
        <button
          className="px-4 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-900"
          aria-label="Add task"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
