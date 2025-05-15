import H2Header from './H2Header';
import Input from './Input';
import Button from './Button';

import { useRef } from 'react';
import Modal from './Modal';
import ProjectImg from '../assets/undraw_project-new.svg';

export default function NewProject({ onFormSave, onFormCancel }) {
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
      tasks: [],
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
        <p className="my-3">Oops... looks like you forgot to enter values</p>
      </Modal>

      <div className="flex lg:flex-row flex-col gap-16">
        <div className=" md:w-[35rem]">
          <menu className="flex flex-col md:flex-row md:justify-between mb-4 md:items-center gap-3.5">
            <H2Header title="create new project" />
            <ul className="flex gap-4">
              <li>
                <Button onClick={() => onFormCancel(undefined)}>Cancel</Button>
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
            <Input
              type="text"
              label="Description"
              textarea
              ref={description}
              rows={5}
            />
            <Input type="date" label="Due Date" ref={dueDate} />
          </div>
        </div>
        <div className="lg:w-[40%] rounded-2xl p-6 bg-zinc-100 flex ">
          <img
            src={ProjectImg}
            alt="project team illustration"
            className=" object-contain"
          />
        </div>
      </div>
    </>
  );
}
