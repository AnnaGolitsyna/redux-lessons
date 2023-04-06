import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import { itemsPerPage } from './variables.js';
import * as pageActions from './page.actions';

const UsersList = () => {
  const { usersList: users, currentPage } = useSelector(({ pageData }) => pageData);
  //   const users = useSelector((state) => state.pageData.usersList);
  //   const currentPage = useSelector((state) => state.pageData.currentPage);
  const dispatch = useDispatch();

  const goPrev = () => {
    dispatch(pageActions.decrement());
  };

  const goNext = () => {
    dispatch(pageActions.increment());
  };

  const start = itemsPerPage * currentPage - itemsPerPage;
  const end = itemsPerPage * currentPage;
  const usersListOnPage = users.slice(start, end);

  return (
    <div>
      <Pagination
        usersLength={users.length}
        currentPage={currentPage}
        goPrev={goPrev}
        goNext={goNext}
      />

      <ul className="users">
        {usersListOnPage.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
