import React, { useState } from 'react';
import { createdTask } from '../tasks.actions';
import { useDispatch } from 'react-redux';

const CreateTask = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const handleChangeTextInput = (e) => {
    setTextInput(e.target.value);
  };

  const hendleCreateTask = () => {
    dispatch(createdTask(textInput));
    // onCreate(textInput);
    setTextInput('');
  };

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={textInput}
        onChange={handleChangeTextInput}
      />
      <button className="btn create-task__btn" onClick={hendleCreateTask}>
        Create
      </button>
    </div>
  );
};

export default CreateTask;
