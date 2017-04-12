import React from 'react';
import _ from 'lodash';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    return (
      <ul>
        {_.map( this.props.benches, (bench) => {
          return <BenchIndexItem key={ bench.id } bench={ bench } />;
        })}
      </ul>
    );
  }
}

export default BenchIndex;
