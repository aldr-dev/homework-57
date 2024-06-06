import {User} from '../../types';
import React from 'react';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card flex-grow-1" style={{width: '300px'}}>
      <div className="card-body">
        <h5 className="card-title fw-medium">Name: {user.name}</h5>
        <span className="card-text d-block">Email: {user.email}</span>
        <span className="card-text d-block">Active: {user.active ? 'Yes' : 'No'}</span>
        <span className="card-text d-block">Role: {user.role}</span>
      </div>
    </div>
  );
};

export default UserItem;