import { Tenant } from './tenant';
import { TenantPayload } from './tenant-payload';

export interface TenantResponse {
 tenants: TenantPayload;
 tenant: Tenant;
}
