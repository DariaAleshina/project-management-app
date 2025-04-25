import Input from './Input';
import H2Header from './H2Header';
import Button from './Button';

export default function NewProject() {
  return (
    <div className=" w-[35rem] mb-12">
      <menu className="flex justify-between mb-4 items-center">
        <H2Header title="create new project" />
        <ul className="flex gap-4">
          <li>
            <Button>Cancel</Button>
          </li>
          <li>
            <Button primary color="dark">
              Save
            </Button>
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
