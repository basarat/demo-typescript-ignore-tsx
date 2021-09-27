import React from 'react';

// Intentional poor annotation 
//  e.g. in an external library
const App = (props: { name: string }) =>
  <div>{props.name || 'Default'}</div>;

<App />;

<div>
  {/* @ts-ignore */}
  <App />
</div>;