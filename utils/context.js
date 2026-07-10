import { AsyncLocalStorage } from 'async_hooks';

export const contextStorage = new AsyncLocalStorage();

export const getActiveWorkspaceId = () => {
  const store = contextStorage.getStore();
  return store?.workspaceId || null;
};

export const getActiveUserId = () => {
  const store = contextStorage.getStore();
  return store?.userId || null;
};
