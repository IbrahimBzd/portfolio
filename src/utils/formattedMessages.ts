const scopes = Object.freeze(['navbar', 'home', 'about', 'services']);

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
  my: 'general.my',

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

  // services
  title1: `${scopes[3]}.title1`,
  content1: `${scopes[3]}.content1`,
  title2: `${scopes[3]}.title2`,
  content2: `${scopes[3]}.content2`,
  title3: `${scopes[3]}.title3`,
  content3: `${scopes[3]}.content3`,
  title4: `${scopes[3]}.title4`,
  content4: `${scopes[3]}.content4`,
  title5: `${scopes[3]}.title5`,
  content5: `${scopes[3]}.content5`,
  title6: `${scopes[3]}.title6`,
  content6: `${scopes[3]}.content6`,
  title7: `${scopes[3]}.title7`,
  content7: `${scopes[3]}.content7`,
});
