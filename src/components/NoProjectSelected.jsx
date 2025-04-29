import H2Header from './H2Header';
import ProjectTeamIcon from '../assets/undraw_project-team-3.svg';
import Button from './Button';

export default function NoProjectSelected({ onButtonClick }) {
  return (
    <div className="flex flex-col lg:flex-row gap-16">
      <div className="flex flex-col justify-between gap-5 bg-zinc-100 rounded-2xl p-6 ">
        <H2Header title="No project selected" />
        <p>
          Welcome to your Project Management App! Simply select am existing
          project or start with a new one by clicking the button below!
        </p>

        <Button primary onClick={() => onButtonClick(null)}>
          Create a new project
        </Button>
      </div>
      <div className="rounded-2xl p-6 bg-zinc-100 lg:w-full flex">
        <img
          src={ProjectTeamIcon}
          alt="project team illustration"
          className=" object-contain"
        />
      </div>
    </div>
  );
}
