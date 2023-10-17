const scopes = Object.freeze(['navbar', 'home', 'about']);

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

  // home
  homeHello: `${scopes[1]}.hello`,
  andIm: `${scopes[1]}.andIm`,
  fullstackDev: `${scopes[1]}.fullstackDev`,
  homeParag: `${scopes[1]}.homeParag`,
  downloadCv: `${scopes[1]}.downloadCv`,

  // about
  hello: `${scopes[2]}.hello`,
  firstParag: `${scopes[2]}.firstParag`,
  secondParag: `${scopes[2]}.secondParag`,
});
