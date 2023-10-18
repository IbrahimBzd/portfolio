import * as React from 'react';

const LazyContactPage = React.lazy(() => import('./Page'));

export default function ContactPage(props) {
  return <LazyContactPage {...props} />;
}
