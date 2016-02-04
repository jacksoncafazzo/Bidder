// Initialize Map
function initialize() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 45.5200, lng: 122.6819},
    zoom: 14

  });

}
google.maps.event.addDomListener(window, 'load', initialize);
