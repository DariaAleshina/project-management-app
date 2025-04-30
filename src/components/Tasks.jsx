export default function Tasks({ tasks }) {
  return (
    <section className="rounded-2xl p-6  bg-zinc-100 flex flex-col gap-5 ">
      <h3 className="font-medium">Tasks</h3>
      <p>New Task add here</p>
      {!tasks && (
        <p className="font-light">No tasks added yet for this project</p>
      )}
      {tasks && <ul></ul>}
    </section>
  );
}
