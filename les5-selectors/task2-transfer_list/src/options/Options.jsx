// input - title, options[], moveOption
import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ title, optionsData, moveOption }) => {
  return (
    <>
      <div className="options">
        <div className="options__title">{title}</div>
        <ul className="options__list">
          {optionsData.map((option) => {
            return (
              <li key={option.id}>
                <button
                  onClick={() => moveOption(option.id)}
                  className="options__list-item"
                >
                  {option.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

Options.propTypes = {
  title: PropTypes.string.isRequired,
  optionsData: PropTypes.array.isRequired,
  moveOption: PropTypes.func.isRequired,
};
export default Options;
