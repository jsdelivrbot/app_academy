import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchBenches } from '../actions/bench_actions';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    console.log('inside: componentDidMount');
    console.log(this.props.benches);
    this.props.fetchBenches();
    console.log(this.props.benches);
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

const mapStateToProps = state => {
  console.log('inside mapStateToProps, state:');
  console.log(state);
  return { benches: state.benches };
};

const mapDispatchToProps = dispatch => {
  return { fetchBenches: () => dispatch(fetchBenches()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
