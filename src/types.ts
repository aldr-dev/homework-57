export interface User {
  id: string;
  name: string;
  email: string;
  active: boolean;
  role: '';
}

export interface UserMutation {
  name: string;
  email: string;
  active: boolean;
  role: '';
}