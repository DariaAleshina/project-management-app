import Button from './Button';
import H2Header from './H2Header';

export default function SelectedProject({ project }) {
  const formattedDueDate = new Date(project.dueDate).toLocaleDateString(
    'en-DE',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
  );
  return (
    <div className="flex flex-col gap-6">
      <header className="flex justify-between">
        <H2Header title={project.title} />
        <div className="flex flex-col items-end">
          <p className="py-2 px-4 text-zinc-50 bg-zinc-800 rounded-3xl">
            {formattedDueDate}
          </p>
          <Button>Delete</Button>
        </div>
      </header>
      <section className="rounded-2xl p-6  bg-zinc-100 whitespace-pre-wrap">
        {project.description}
      </section>{' '}
      <section className="rounded-2xl p-6  bg-zinc-100 ">
        Tasks will be here
      </section>
    </div>
  );
}
