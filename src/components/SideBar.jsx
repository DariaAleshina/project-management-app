import H2Header from './H2Header';
import Button from './Button';

export default function SideBar({ onButtonClick, projects }) {
  return (
    <aside className="w-1/3 md:w-1/5 py-8 flex flex-col gap-12">
      <H2Header title="My Projects" />
      <Button primary color="violet" onClick={() => onButtonClick(null)}>
        Add Projects
      </Button>
      <ul className="font-light flex flex-col gap-1">
        {projects.map(project => (
          <li
            key={project.id}
            className=" text-zinc-400 flex items-center py-2 px-4 rounded-sm hover:bg-zinc-800 hover:text-zinc-50"
          >
            <button onClick={() => onButtonClick(project.id)}>
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
