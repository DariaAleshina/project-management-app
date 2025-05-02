import Input from './Input';
import Button from './Button';

import { useState } from 'react';

export default function NewTask({ projectId, onTaskAdd, onTaskDelete }) {
  const [enteredTask, setEnteredTask] = useState();
  const handleChange = function (event) {
    setEnteredTask(event.target.value);
  };
  const handleClick = function () {
    onTaskAdd(projectId, enteredTask);
    setEnteredTask('');
  };
  return (
    <div className="rounded-2xl p-6  bg-blue-300 flex flex-col gap-5 lg:w-full">
      <Input
        label="Add new task"
        textarea
        rows={1}
        onChange={handleChange}
        value={enteredTask}
      />
      <div className="self-end">
        <Button primary onClick={handleClick}>
          Save
        </Button>
      </div>
    </div>
  );
}
