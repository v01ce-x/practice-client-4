export const ACCOUNT_QUERY_KEYS = {
  all: ['account'] as const,
  profile: () =>  [...ACCOUNT_QUERY_KEYS.all, 'profile'] as const,
}
