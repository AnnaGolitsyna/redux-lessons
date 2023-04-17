import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showUserData } from './users.actions';

const SearchField = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const getUserData = () => {
    dispatch(showUserData(userName));
  };

  return (
    <div className="name-form">
      <input
        type="text"
        className="name-form__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="name-form__btn btn" onClick={getUserData}>
        Show
      </button>
    </div>
  );
};

export default SearchField;
