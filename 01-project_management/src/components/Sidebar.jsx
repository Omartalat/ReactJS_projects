export default function Sidebar({
  handleAddProject,
  userProjects,
  onSelectProject,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="text-xl font-bold text-stone-700 my-4">Your Projects</h2>
      <button
        onClick={handleAddProject}
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
      >
        + Add Project
      </button>
      {userProjects.length > 0 ? (
        <nav className="mt-8">
          <ul className="space-y-2">
            {userProjects.map((project, index) => (
              <li
                key={project.id ?? index}
                onClick={() => onSelectProject(project.id)}
                className="px-4 py-2 rounded-md bg-stone-800 hover:bg-stone-700 cursor-pointer transition-colors"
              >
                {project.title}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </aside>
  );
}
