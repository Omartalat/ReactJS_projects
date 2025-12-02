import Sidebar from "./components/Sidebar";
import DefaultPage from "./components/DefaultPage";
import CreateProjectPage from "./components/CreateProjectPage";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [createProjectState, setCreateProjectState] = useState(false);
  return (
    <main className="h-screen flex gap-8">
      <Sidebar
        projects={projects}
        setCreateProjectState={setCreateProjectState}
      />

      {createProjectState ? (
        <CreateProjectPage projects={projects} setProjects={setProjects} />
      ) : (
        <DefaultPage
          setCreateProjectState={setCreateProjectState}
        />
      )}
    </main>
  );
}

export default App;
