import H2Header from './H2Header';
import Button from './Button';

export default function SideBar({ onButtonClick, projects }) {
  return (
    <aside className="w-1/3 md:w-1/5 py-8 flex flex-col gap-6">
      <H2Header title="My Projects" />

      <Button primary color="violet" onClick={() => onButtonClick(null)}>
        Add Projects
      </Button>
      <ul className="font-light">
        <li>Project 1</li>
        <li>Project 2</li>
      </ul>
    </aside>
  );
}
