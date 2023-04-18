import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

const Task = ({ id, text, done, onChange, onDelete }) => {
  const listItemClasses = ClassNames('list-item', { 'list-item_done': done });

  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

Task.propTypes = {
  done: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Task;
