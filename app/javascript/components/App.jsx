import React from 'react';

const App = (props) => {
  console.log('App');
  return <div>Hello {props.name}!</div>;
};

App.defaultProps = {
  name: 'ほにたん好きや',
};

export default App;
