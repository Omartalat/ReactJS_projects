import Sidebar from "./components/Sidebar";
import DefaultPage from "./components/DefaultPage";
import CreateProjectPage from "./components/CreateProjectPage";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const [createProjectState, setCreateProjectState] = useState(false);

  function handleAddProject() {
    setCreateProjectState(true);
    setProjects((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  return (
    <main className="h-screen flex gap-8">
      <Sidebar handleAddProject={handleAddProject} projects={projects} />
      {createProjectState ? (
        <CreateProjectPage projects={projects} setProjects={setProjects} />
      ) : (
        <DefaultPage handleAddProject={handleAddProject} />
      )}
    </main>
  );
}

export default App;
