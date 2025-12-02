export default function DefaultPage({ setCreateProjectState }) {
  function handleClick() {
    setCreateProjectState(true);
  }
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src="logo.png"
        alt="note-logo"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No Project Selected
      </h2>
      <p>select a project or get started with a new one</p>
      <button
        onClick={handleClick}
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 my-5"
      >
        Create New Project
      </button>
    </div>
  );
}
