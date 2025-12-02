import { useRef } from "react";

export default function CreateProjectPage({ projects, setProjects }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  function handleSave() {
    const id = crypto.randomUUID();
    const newProject = {
      id: id,
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
      tasks: [],
    };
    const newProjects = [...projects, newProject];
    setProjects(newProjects);
  }
  return (
    <div className="w-full max-w-3xl mx-auto mt-16 px-8">
      <form className="space-y-6">
        <div className="flex justify-end gap-4 mb-8">
          <button
            type="button"
            className="px-6 py-2 rounded-md bg-white text-stone-800 border border-stone-300 hover:bg-stone-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 transition-colors"
            onClick={handleSave}
          >
            Save
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="title"
            className="text-sm font-semibold text-stone-600 uppercase"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            ref={title}
            className="w-full px-3 py-2 border-b-2 border-stone-300 bg-stone-50 focus:outline-none focus:border-stone-600 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-sm font-semibold text-stone-600 uppercase"
          >
            Description
          </label>
          <textarea
            name="description"
            ref={description}
            rows="4"
            className="w-full px-3 py-2 border-b-2 border-stone-300 bg-stone-50 focus:outline-none focus:border-stone-600 transition-colors resize-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="date"
            className="text-sm font-semibold text-stone-600 uppercase"
          >
            Due Date
          </label>
          <input
            type="date"
            name="date"
            ref={dueDate}
            className="w-full px-3 py-2 border-b-2 border-stone-300 bg-stone-50 focus:outline-none focus:border-stone-600 transition-colors"
          />
        </div>
      </form>
    </div>
  );
}
