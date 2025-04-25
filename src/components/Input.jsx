export default function Input({ label, textarea, ...props }) {
  const inputClasses =
    'rounded-lg border p-2 text-zinc-800 focus:outline-none focus:border-zinc-900';

  return (
    <div className="flex flex-col gap-1">
      <label className="capitalise">{label}</label>
      {textarea ? (
        <textarea {...props} className={inputClasses} />
      ) : (
        <input {...props} className={inputClasses} />
      )}
    </div>
  );
}
