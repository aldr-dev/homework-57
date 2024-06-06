import {useState} from 'react';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {User} from './types';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
      setUsers((prevState) => {
        return [...prevState, user];
      });
  };

  return (
    <div className="container-xxl mt-5">
      <div className="row">
        <div className="col-md-6">
          <UserForm onSubmit={addUser}/>
        </div>
        <div className="col-md-6">
          <Users users={users}/>
        </div>
      </div>
    </div>
  );
};

export default App;