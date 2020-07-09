import { User } from '../../admins/models/user';

export interface Tenant {
  _id?: string;
  description: string;
  user: User;
  status?: string;
}
