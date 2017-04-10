import React from 'react';

const Root = ({ store }) => {
  return (
    <div>
      <p>root component, current store:</p>
      <p>{console.log(store.getState())}</p>
    </div>

  );
};

export default Root;
