export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    for (let benchId in benches){
      let bench = benches[benchId];
      this.markers[bench.id]
        ? this.updateMarker(bench)
        : this.addMarker(bench);
    }
  }

  addMarker(bench){
    this.markers[bench.id] = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      benchId: bench.id
    });
  }

  updateMarker(bench){
    this.removeMarker(bench);
    this.addMarker(bench);
  }

  removeMarker(bench){
    delete this.markers[bench.id];
  }
}
