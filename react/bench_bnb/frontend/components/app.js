import React from 'react';
import Greeting from './greeting';

const App = (props) => {
  console.log("props:");
  console.log(props);
  return (
    <div>
      <h1>Bench BnB</h1>
      <Greeting />
    </div>
  );
};

export default App;
