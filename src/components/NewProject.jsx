import H2Header from './H2Header';
import Input from './Input';
import Button from './Button';

import { useRef } from 'react';
import Modal from './Modal';

export default function NewProject({ onFormSave }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = function () {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onFormSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });

    // title.current.value =
    //   description.current.value =
    //   dueDate.current.value =
    //     '';
  };

  return (
    <>
      <Modal ref={modal}>
        <H2Header title="Invalid Input" className="text-zinc-950" />
        <p>Oops... looks like you forgot to enter values</p>
      </Modal>
      <div className=" md:w-[35rem] mb-12">
        <menu className="flex flex-col md:flex-row md:justify-between mb-4 md:items-center gap-3.5">
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
    </>
  );
}
