import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Filter from '../Filter';
import { filteredUsersListAction } from './users.action';
import {
  filteredUsersListSelectorSelector,
  filterTextSelector,
} from './users.selectors';

const UsersList = ({ filterText, usersList, handleFilter }) => {

  return (
    <>
      <Filter
        filterText={filterText}
        count={usersList.length}
        onChange={handleFilter}
      />
      <ul className="users">
        {usersList.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </>
  );
};

const mapState = (state) => {
  return {
    filterText: filterTextSelector(state),
    usersList: filteredUsersListSelectorSelector(state),
  };
};

const mapDispatch = {
  handleFilter: filteredUsersListAction,
};

export default connect(mapState, mapDispatch)(UsersList);
