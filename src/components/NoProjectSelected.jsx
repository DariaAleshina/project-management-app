import H2Header from './H2Header';
import ProjectTeamIcon from '../assets/undraw_project-team.svg';
import Button from './Button';

export default function NoProjectSelected({ onButtonClick }) {
  return (
    <div className="flex flex-col md:flex-row gap-20 md: justify-between mb-12">
      <div className="flex flex-col gap-5 bg-zinc-100 rounded-2xl p-6 md:w-[45%]">
        <H2Header title="No project selected" />
        <p>Select a project or get started with a new one</p>

        <Button primary onClick={() => onButtonClick(null)}>
          Create a new project
        </Button>
      </div>
      <div className="md:w-[45%] rounded-2xl p-6  bg-zinc-100 ">
        <img
          src={ProjectTeamIcon}
          alt="project team illustration"
          className=" object-contain"
        />
      </div>
    </div>
  );
}
