import { Admin } from './admin';
import { AdminPayload } from './admin-payload';

export interface AdminResponse {
 admins: AdminPayload;
 admin: Admin;
}
