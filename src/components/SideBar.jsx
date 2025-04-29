import H2Header from './H2Header';
import Button from './Button';

export default function SideBar({
  onButtonClick,
  projects,
  selectedProjectID,
}) {
  return (
    <aside className="w-1/3 md:w-1/5 py-2 flex flex-col gap-8">
      <h1 className="font-thin">Plannum Light</h1>
      <H2Header title="My Projects" />
      <Button primary color="violet" onClick={() => onButtonClick(null)}>
        Add Projects
      </Button>
      <ul className="font-light flex flex-col gap-1">
        {projects.map(project => {
          let styles =
            'text-zinc-400 flex items-start py-2 px-4 rounded-sm hover:text-zinc-50';

          project.id === selectedProjectID && (styles += ' bg-zinc-800');

          return (
            <li key={project.id} className={styles}>
              <button
                onClick={() => onButtonClick(project.id)}
                className="text-left"
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
