import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const inputClasses =
    'rounded-lg border p-2 text-zinc-800 focus:outline-none focus:border-zinc-900';

  return (
    <div className="flex flex-col gap-2">
      <label className="capitalise">{label}</label>
      {textarea ? (
        <textarea {...props} className={inputClasses} ref={ref} />
      ) : (
        <input {...props} className={inputClasses} ref={ref} />
      )}
    </div>
  );
});

export default Input;
