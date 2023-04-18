import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateTask = ({ onCreate }) => {
  const [textInput, setTextInput] = useState('');

  const handleChangeTextInput = (e) => {
    setTextInput(e.target.value);
  };

  const hendleCreateTask = () => {
    onCreate(textInput);
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

CreateTask.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreateTask;
