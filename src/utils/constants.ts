// eslint-disable-next-line @typescript-eslint/naming-convention
export const __DEV__ = process.env.NODE_ENV !== 'production';

export const EMPTY_ARRAY = Object.freeze([]);
export const EMPTY_OBJECT = Object.freeze({});
export const EMPTY_STRING = Object.freeze('');

export const fetchStatusTypes = Object.freeze({
  INITIAL: 'initial',
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error',
  ABORTED: 'aborted',
});
