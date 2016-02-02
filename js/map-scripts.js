var map;

var markers = [];
var coordinates = [];
var myLatLng;
var imageData;

function initialize () {
  coordinates = [];
  var myLatLong = new google.maps.LatLng(45.520705, -122.677397);

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: myLatLong,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  map.addListener("click", function (event) {
    var latitude = event.latLng.lat();
    var longitude = event.latLng.lng();
    myLatLng = {lat: latitude, lng: longitude};
    var marker = new google.maps.Marker({
      position: myLatLng,
      // icon: bidder,
      map: map,
    });
    markersArray.push(marker);
  });
  return coordinates;
}



// // Function to set a marker title
// function setMarkerTitle(markerId, title) {
//
//     markers[markerId].setTitle(title);
//     infowindow.close();
// }

// Function to add a marker
// function addMarker(location) {
  // var map = null;
  // var infowindow = new google.maps.InfoWindow();
  // var counter = 0;
  // var inputForm;
  //   counter++;

// Create marker
// var marker = new google.maps.Marker({
//     position: location,
//     map: map,
//     id: counter
// });

// Create title field and submit button
// inputForm = 'Name:  <input type="text" id="nameinput" size="31" maxlength="31" value=""/>' + '<button id="inputButton" data-id="' + counter + '">Submit</button>';
//
// // Set infowindow content
// infowindow.setContent(inputForm);
// infowindow.open(map, marker);
//
// // Add marker to markers array
// markers[counter] = marker;
//
// var deleteButton = '<button id="deleteButton" data-id="' + counter + '">Delete</button>';

// Right click event (to present delete marker button)
//   google.maps.event.addListener(marker, 'rightclick', function () {
//   infowindow.setContent(deleteButton);
//   infowindow.open(map, marker);
//   });
//
// // Left click event (to present fields to set title)
//   google.maps.event.addListener(marker, 'click', function () {
//
//  // Create title field and submit button
//  inputForm = 'Name:  <input type="text" id="nameinput" size="31" maxlength="31" tabindex="1" value="' + markerTitle + '"/>' + '<input type="button" id="inputButton" data-id="' + this.id + '" value="Submit">';
//        // Set infowindow content
//   infowindow.setContent(inputForm);
//   infowindow.open(map, marker);
//      });
// }

// Function to delete a marker
// function deleteMarker(markerId) {
//
//     markers[markerId].setMap(null);
// }

// google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function (event) {

  initialize();
  // $("#showMap").click(function (event) {
  //
  // });

});
