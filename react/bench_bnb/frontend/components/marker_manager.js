export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    for (let benchId in benches){
      this.updateMarker(benches[benchId]);
    }
  }

  updateMarker(bench){
    this.markers[bench.id] = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: `bench ${bench.id}`
    });
  }//: accepts a bench object as an argument; adds a marker to the map and to the markers array.

}
