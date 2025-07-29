import React, { lazy, Suspense } from 'react';

// const RemotePage = lazy(() => import('remote_app/RemotePage'));

const RemoteWrapper = () => (
  <Suspense fallback={<div>Loading remote page...</div>}>
        {/* <RemotePage />*/}
        Loading remote page
  </Suspense>
);

export default RemoteWrapper;
