import React from 'react';

class BenchIndexItem extends React.Component {

  render() {
    const { bench } = this.props;
    return (
      <li>
        <h1>{bench.description}</h1>
      </li>
    );
  }

}

export default BenchIndexItem;
