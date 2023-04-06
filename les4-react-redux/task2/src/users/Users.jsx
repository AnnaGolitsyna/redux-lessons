import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

const Users = ({ users, addUser, deleteUser }) => {

  const userCreateHandler = () => {
    const id = Math.round(Math.random() * 10 ** 6).toString();
    const newUser = {
      id,
      name: `User # ${id}`,
    };
    addUser(newUser);
  };

  const userDeleteHandler = (userId) => {
    deleteUser(userId);
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

const mapState = (state) => ({
  users: state.users.usersList,
});

const mapDispatch = {
  addUser: usersActions.addUser,
  deleteUser: usersActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users);

export default ConnectedUsers;
