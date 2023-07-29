interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'IT Administrator', 'Customer Support Representative'],
  tenantName: 'Organization',
  applicationName: 'WhmcsGPT',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
