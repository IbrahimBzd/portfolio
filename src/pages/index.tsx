import * as React from 'react';

const LazyPage = React.lazy(() => import('./Page'));

export default function Page(props) {
  return <LazyPage {...props} />;
}
