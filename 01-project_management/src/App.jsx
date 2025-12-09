import Sidebar from "./components/Sidebar";
import DefaultPage from "./components/DefaultPage";
import CreateProjectPage from "./components/CreateProjectPage";
import ProjectPage from "./components/ProjectPage";
import { useState } from "react";

function App() {
  const [userProjects, setUserProjects] = useState([]);
  const [createProjectState, setCreateProjectState] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  function handleAddProject() {
    setCreateProjectState(true);
    setSelectedProjectId(null);
  }

  function handleSelectProject(projectId) {
    setSelectedProjectId(projectId);
    setCreateProjectState(false);
  }

  const selectedProject = userProjects.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <main className="h-screen flex gap-8">
      <Sidebar
        handleAddProject={handleAddProject}
        userProjects={userProjects}
        onSelectProject={handleSelectProject}
      />
      {createProjectState ? (
        <CreateProjectPage
          createProjectState={createProjectState}
          setCreateProjectState={setCreateProjectState}
          userProjects={userProjects}
          setUserProjects={setUserProjects}
        />
      ) : selectedProject ? (
        <ProjectPage userProjects={userProjects} setSelectedProjectId={setSelectedProjectId} setUserProjects={setUserProjects} {...selectedProject} />
      ) : (
        <DefaultPage handleAddProject={handleAddProject} />
      )}
    </main>
  );
}

export default App;
