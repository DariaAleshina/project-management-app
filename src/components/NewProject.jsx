import H2Header from './H2Header';
import Input from './Input';
import Button from './Button';

import { useRef } from 'react';

export default function NewProject({ onFormSave }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = function () {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // TODO: add validation that all fields are filled correctly
    onFormSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });

    title.current.value =
      description.current.value =
      dueDate.current.value =
        '';
  };

  return (
    <div className=" w-[35rem] mb-12">
      <menu className="flex justify-between mb-4 items-center">
        <H2Header title="create new project" />
        <ul className="flex gap-4">
          <li>
            <Button>Cancel</Button>
          </li>
          <li>
            <Button primary color="dark" onClick={handleSave}>
              Save
            </Button>
          </li>
        </ul>
      </menu>
      <div className="flex flex-col gap-5">
        <Input type="text" label="Title" textarea ref={title} />
        <Input type="text" label="Description" textarea ref={description} />
        <Input type="date" label="Due Date" ref={dueDate} />
      </div>
    </div>
  );
}
