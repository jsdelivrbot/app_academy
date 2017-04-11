import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

class Search extends React.Component {

  render() {
    return (
      <div>
        <BenchMap />
        <BenchIndex />
      </div>
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
)(Search);
