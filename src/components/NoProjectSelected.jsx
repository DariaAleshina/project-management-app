import H2Header from './H2Header';
import ProjectTeamIcon from '../assets/undraw_project-team.svg';

export default function NoProjectSelected() {
  return (
    <div className="flex flex-col md:flex-row gap-20 mb-12">
      <div className="flex flex-col gap-5">
        <H2Header title="No project selected" />
        <p>Select a project or get started with a new one</p>
        <button className=" font-medium px-4 py-2 text-xs md:text-base rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-50 w-full">
          Create a new project
        </button>
      </div>
      <img
        src={ProjectTeamIcon}
        alt="project team illustation"
        className="md:w-1/2"
      />
    </div>
  );
}
