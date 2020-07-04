import { User } from './user';
export interface Admin {
  _id?: string;
  description: string;
  user: User;
  status?: string;
}
