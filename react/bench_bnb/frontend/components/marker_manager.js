import React from 'react';

class MarkerManager extends React.Component {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches) {
    console.log('time to update');
  }

  render() {
    return (
      <div></div>
    );
  }

}

export default MarkerManager;
