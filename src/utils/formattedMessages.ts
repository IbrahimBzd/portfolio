const scopes = Object.freeze(['navbar']);

export const formattedMessages = Object.freeze({
  error: 'error',
  success: 'success',
  continue: 'continue',
  yes: 'yes',
  no: 'no',
  updating: 'updating',
  sending: 'sending',
  add: 'add',
  edit: 'edit',
  delete: 'delete',
  deleting: 'deleting',
  retry: 'retry',
  save: 'save',
  cancel: 'cancel',
  search: 'search',
  title: 'title',

  // navbar
  home: `${scopes[0]}.home`,
  about: `${scopes[0]}.about`,
  services: `${scopes[0]}.services`,
  projects: `${scopes[0]}.projects`,
  contact: `${scopes[0]}.contact`,
});
