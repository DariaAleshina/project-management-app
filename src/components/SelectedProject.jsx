import Button from './Button';
import H2Header from './H2Header';

export default function SelectedProject({ project }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <H2Header title={project.title} />
        <div className="flex flex-col items-end">
          <p className="py-2 px-4 text-zinc-50 bg-zinc-800 rounded-3xl">
            {project.dueDate}
          </p>
          <Button>Delete</Button>
        </div>
      </div>
      <div className="rounded-2xl p-6  bg-zinc-100 ">{project.description}</div>{' '}
      <div className="rounded-2xl p-6  bg-zinc-100 ">tasks here</div>
    </div>
  );
}
