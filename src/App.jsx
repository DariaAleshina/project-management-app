import SideBar from './components/SideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  return (
    <>
      <main className="h-screen py-6 px-8 flex gap-12">
        <SideBar />
        {/* View Area */}
        <div className=" bg-zinc-800 w-full p-8 text-zinc-950 bg-gradient-to-r from-violet-400 to-blue-400 rounded-2xl 	overflow-scroll">
          <NewProject />
          <NoProjectSelected />
        </div>
      </main>
    </>
  );
}

export default App;
