import React from 'react';
import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';

import BenchMap from './bench_map';
import BenchIndex from './bench_index';

class Search extends React.Component {

  render() {
    return (
      <div>
        <BenchIndex
          benches={ this.props.benches }
          fetchBenches={ this.props.fetchBenches } />
        <BenchMap />
      </div>
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
)(Search);
