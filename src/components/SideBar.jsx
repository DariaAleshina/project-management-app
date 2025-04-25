import H2Header from './H2Header';

export default function SideBar() {
  return (
    <aside className="w-1/3 md:w-1/5 py-8 flex flex-col gap-6">
      <H2Header title="My Projects" />
      <div>
        <button className="text-zinc-950 font-medium px-4 py-2 text-xs md:text-base rounded-xl bg-violet-500 hover:bg-violet-400 w-full">
          Add Projects
        </button>
      </div>
      <ul className="font-light">
        <li>Project 1</li>
        <li>Project 2</li>
      </ul>
    </aside>
  );
}
