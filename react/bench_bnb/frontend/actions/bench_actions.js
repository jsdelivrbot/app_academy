import * as ApiUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

export const fetchBenches = () => dispatch => {
  ApiUtil.fetchBenches()
    .then(benchesPromise => {
      dispatch(receiveBenches(benchesPromise));
    }, errors => {
      console.log(errors);
    });
};

export const receiveBenches = benches => {
  return {
    type: RECEIVE_BENCHES,
    benches: benches
  };
};
