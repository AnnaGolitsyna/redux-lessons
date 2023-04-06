import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as usersActions from './users.actions';

const Users = () => {
  const users = useSelector((state) => state.users.usersList);
  const dispatch = useDispatch();

  const userCreateHandler = () => {
    const id = Math.round(Math.random() * 10 ** 6).toString();
    const newUser = {
      id,
      name: `User # ${id}`,
    };
    dispatch(usersActions.addUser(newUser));
  };

  const userDeleteHandler = (userId) => {
    dispatch(usersActions.deleteUser(userId));
  };

  return (
    <div className="users">
      <button className="users__create-btn" onClick={userCreateHandler}>
        Create user
      </button>
      <ul className="users__list">
        {users.map((user) => (
          <li key={user.id} className="users__list-item">
            <span>{user.name}</span>
            <button
              className="users__delete-btn"
              onClick={() => userDeleteHandler(user.id)}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Users;
