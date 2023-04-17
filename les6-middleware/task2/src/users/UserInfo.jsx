import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const UserInfo = () => {
  const {avatar_url, name, location} = useSelector((state) => state.users.userData);
  console.log(avatar_url, name, location);

  return (
    <div className="user">
      <img
        alt="User Avatar"
        src={avatar_url}
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default UserInfo;
