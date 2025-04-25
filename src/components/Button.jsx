export default function Button({
  children,
  primary,
  color = 'dark',
  ...props
}) {
  let styles = 'font-medium px-4 py-2 text-xs md:text-base rounded-xl ';
  primary &&
    color === 'dark' &&
    (styles += 'bg-zinc-800 hover:bg-zinc-700 text-zinc-50');

  color === 'violet' &&
    (styles += 'bg-violet-500 hover:bg-violet-400 text-zinc-950');

  !primary && (styles += 'text-zinc-700 hover:text-zinc-950 font-normal');

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
