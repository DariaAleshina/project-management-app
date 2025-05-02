import Button from './Button';
import NewTask from './NewTask';

export default function Tasks({ projectId, tasks, onAdd, onDelete }) {
  return (
    <section className="flex flex-col-reverse lg:flex-row gap-6">
      <div className="rounded-2xl p-6  bg-zinc-100 flex flex-col gap-2 lg:w-full">
        <h3 className="font-bold">Tasks</h3>
        {tasks.length === 0 && (
          <p className="font-light">No tasks added yet for this project</p>
        )}
        {tasks.length >= 1 && (
          <ul className="flex flex-col gap-2">
            {tasks.map(task => (
              <li key={task.id} className="flex justify-between">
                <span>{task.task}</span>
                <button className="font-light text-sm text-zinc-700 hover:text-violet-700">
                  Clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <NewTask
        projectId={projectId}
        onTaskAdd={onAdd}
        onTaskDelete={onDelete}
      />
    </section>
  );
}
