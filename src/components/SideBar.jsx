export default function SideBar() {
  return (
    <aside className="w-1/5 h-full bg-zinc-900 p-4 flex flex-col gap-6">
      <h2 className="font-semibold capitalize md:text-xl ">Your Projects</h2>
      <div>
        <button className="text-zinc-950 font-medium px-4 py-2 text-xs md:text-base rounded-md bg-violet-500 hover:bg-violet-400 ">
          + Add Projects
        </button>
      </div>
      <ul className="font-light">
        <li>Project 1</li>
        <li>Project 2</li>
      </ul>
    </aside>
  );
}
