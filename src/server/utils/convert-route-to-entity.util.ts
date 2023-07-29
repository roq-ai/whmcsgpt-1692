const mapping: Record<string, string> = {
  organizations: 'organization',
  tickets: 'ticket',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
