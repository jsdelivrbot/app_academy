import React from 'react';
import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    console.log('inside: componentDidMount');
    console.log(this.state);
    this.fetchBenches();
    console.log(this.state);
  }

  render() {
    return (
      <ul>
        <BenchIndexItem />
      </ul>
    );
  }

}

const mapStateToProps = state => {
  return { benches: state.benches };
};

const mapDispatchToProps = dispatch => {
  return { fetchBenches: () => dispatch(fetchBenches()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
