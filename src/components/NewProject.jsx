import Input from './Input';
import H2Header from './H2Header';

export default function NewProject() {
  return (
    <div className=" w-[35rem] mb-12">
      <menu className="flex justify-between mb-4 items-center">
        <H2Header title="create new project" />
        <ul className="flex gap-4">
          <li>
            <button className="text-zinc-700 hover:text-zinc-950 py-2 px-4 rounded-xl">
              Cancel
            </button>
          </li>
          <li>
            <button className="py-2 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-50 rounded-xl">
              Save
            </button>
          </li>
        </ul>
      </menu>
      <div className="flex flex-col gap-5">
        <Input label="Title" textarea />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
