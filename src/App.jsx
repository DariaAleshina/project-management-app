import SideBar from './components/SideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import { useState } from 'react';
import { use } from 'react';
import { preconnect } from 'react-dom';

const INIT_STATE = {
  selectedProjectId: undefined, // triggers NoProjectSelected view
  projects: [],
};

function App() {
  const [projectsState, setProjectsState] = useState(INIT_STATE);

  const handleProjectViewUpdate = function (projectId) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId, // pass 'null' for NewProject view, 'undefined' for NoProjectSelected view, or project ID for a selected Project view.
      };
    });
  };

  const handleSaveNewProject = function (projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.round(Math.random() * 10000) + 1, //random ID number generated
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  console.log('projectsState: ', projectsState);

  return (
    <>
      <main className="h-screen py-6 px-8 flex gap-12">
        <SideBar
          onButtonClick={handleProjectViewUpdate}
          projects={projectsState.projects}
        />

        {/* View Area */}
        <div className=" bg-zinc-800 w-full p-8 text-zinc-950 bg-gradient-to-r from-violet-400 to-blue-400 rounded-2xl 	overflow-scroll">
          {projectsState.selectedProjectId === undefined && (
            <NoProjectSelected onButtonClick={handleProjectViewUpdate} />
          )}

          {projectsState.selectedProjectId === null && (
            <NewProject
              onFormSave={handleSaveNewProject}
              onFormCancel={handleProjectViewUpdate}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
