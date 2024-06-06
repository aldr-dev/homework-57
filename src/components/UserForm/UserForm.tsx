import React, {useState} from 'react';
import {User, UserMutation} from '../../types';

interface Props {
  onSubmit: (user: User) => void;
}

const initialState:UserMutation = {
  name: '',
  email: '',
  active: false,
  role: '',
};

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [userData, setUserData] = useState<UserMutation>(initialState);

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserData((prevState) => {
        return {
          ...prevState,
          [event.target.name]: event.target.value,
        };
    });
  };

  const changeBooleanValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.checked,
      };
    });
  };

  const onFormSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      onSubmit({
        id: Math.random().toString(),
        ...userData,
      });

      setUserData(initialState);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h2 className="mb-4">Create User</h2>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Name"
          className="form-control"
          onChange={onFieldChange}
          value={userData.name}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="Email"
          className="form-control"
          onChange={onFieldChange}
          value={userData.email}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="active" className="form-label me-2">Active:</label>
        <input
          id="active"
          type="checkbox"
          name="active"
          required
          className="form-check-input"
          onChange={changeBooleanValue}
          checked={userData.active}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="role" className="form-label">Role:</label>
        <select
          id="role"
          name="role"
          required
          className="form-select"
          onChange={onFieldChange}
          value={userData.role}>

          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Create User</button>
    </form>
  );
};

export default UserForm;