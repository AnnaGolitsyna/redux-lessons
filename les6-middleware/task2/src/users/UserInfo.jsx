import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';
import { userDataSelector, isFetchingSelector } from './users.selectors';

const UserInfo = () => {
  const userData = useSelector((state) => userDataSelector(state));
  const isFetching = useSelector((state) => isFetchingSelector(state));

  if (!userData) {
    return null;
  }

  if (isFetching) {
    return <Spinner />;
  }

  const { avatar_url, name, location } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default UserInfo;
