import React from 'react';
import {User} from '../../types';
import UserItem from '../UserItem/UserItem';

interface Props {
  users: User[];
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <>
      <h2 className="mb-4">List of Users</h2>
      <div className="d-flex gap-2 flex-wrap">
        {users.map((user) => (
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    </>
  );
};

export default Users;