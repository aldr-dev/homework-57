export interface User {
  id: string;
  name: string;
  email: string;
  active: boolean;
  role: 'user' | 'editor' | 'admin';
}