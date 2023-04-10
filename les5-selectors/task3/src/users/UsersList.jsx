// store
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from './User';
import Filter from '../Filter';
import { filteredUsersListAction } from './users.action';
import {mainSelector} from './users.selectors';

const UsersList = () => {
  // const usersList = useSelector((state) => state.showUsersList.usersList);
  const usersList = useSelector(mainSelector)
  const filterText = useSelector((state) => state.showUsersList.filterText);
  console.log(usersList, filterText);

  const dispatch = useDispatch();

  const onChangeTextInput = (text) => {
    console.log(text);
    dispatch(filteredUsersListAction(text))
  };

  return (
    <>
      <Filter
        filterText={filterText}
        count={usersList.length}
        onChange={onChangeTextInput}
      />
      <ul className="users">
        {usersList.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </>
  );
};

export default UsersList;
