import SideBar from './components/SideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';
import { useState } from 'react';

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
        selectedProjectId: newProject.id,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  console.log('projectsState: ', projectsState);

  const handleProjectDelete = function (id) {
    setProjectsState(prevState => {
      const projectsUpdated = prevState.projects.filter(
        project => id !== project.id
      );

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: projectsUpdated,
      };
    });
  };

  const handleAddTask = function (projectId, taskText) {
    setProjectsState(prevState => {
      const newTask = {
        task: taskText,
        id: Math.round(Math.random() * 10000) + 1, //random ID number generated
      };

      const newProjectsArray = prevState.projects.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: [...project.tasks, newTask],
          };
        }
        return project;
      });

      return {
        ...prevState,
        projects: newProjectsArray,
      };
    });
  };

  const handleDeleteTask = function (projectId, taskId) {};

  return (
    <>
      <main className="h-screen py-6 px-8 flex gap-6">
        <SideBar
          onButtonClick={handleProjectViewUpdate}
          projects={projectsState.projects}
          selectedProjectID={projectsState.selectedProjectId}
        />

        {/* View Area */}
        <div className=" bg-zinc-800 w-full p-16 text-zinc-950 bg-gradient-to-r from-violet-400 to-blue-400 rounded-2xl 	overflow-scroll">
          {projectsState.selectedProjectId === undefined && (
            <NoProjectSelected onButtonClick={handleProjectViewUpdate} />
          )}

          {projectsState.selectedProjectId === null && (
            <NewProject
              onFormSave={handleSaveNewProject}
              onFormCancel={handleProjectViewUpdate}
            />
          )}

          {projectsState.selectedProjectId && (
            <SelectedProject
              project={projectsState.projects.find(
                project => project.id === projectsState.selectedProjectId
              )}
              onDelete={handleProjectDelete}
              onTaskAdd={handleAddTask}
              onTaskDelete={handleDeleteTask}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
