import React from 'react';

// Intentional poor annotation
const App = (props: { name: string }) => <div>{props.name || 'Default'}</div>;

<App name="hello" />;

// @ts-ignore
<App />;

<div>
  {
    // @ts-ignore
    <App />
  }
</div>;

// @ts-ignore
const example = <App />;

<div>
  {example}
</div>;


<div>
  <App
    // @ts-ignore
    name={123}
  />
</div>;