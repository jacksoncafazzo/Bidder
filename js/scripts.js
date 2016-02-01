function initMap () {
    var myLatLong = new google.maps.LatLng(45.520705, -122.677397);
    var mapOptions = {
      zoom: 18,
      center: myLatLong,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    google.maps.event.addListener(map, 'click', function (event) {

      addMarker(event.latLng);
    });

     google.maps.event.addListener(infowindow, 'domready', function () {
       var button, markerId, inputValue;

       //  this switches scenario depending on infowindow contents
       if (document.getElementById('deleteButton')) {
        // Bind action for delete button
        button = document.getElementById('deleteButton');
        button.focus();
        markerId = parseInt(button.getAttribute('data-id'));
        button.onclick = function () {

         // Call deleteMarker function
        deleteMarker(markerId);
      };
   } else {
     // Bind action for set title button
     button = document.getElementById('inputButton');
     markerId = parseInt(button.getAttribute('data-id'));
     button.onclick = function () {
       // Get input value and call setMarkerTitle function
       inputValue = document.getElementById('nameinput').value;
       setMarkerTitle(markerId, inputValue);
     };
     document.getElementById('nameinput').focus();
   }
 });
}

// Function to set a marker title
function setMarkerTitle(markerId, title) {

    markers[markerId].setTitle(title);
    infowindow.close();
}

// Function to add a marker
function addMarker(location) {
  var inputForm;
    counter++;

// Create marker
var marker = new google.maps.Marker({
    position: location,
    map: map,
    id: counter
});

// Create title field and submit button
inputForm = 'Name:  <input type="text" id="nameinput" size="31" maxlength="31" value=""/>' + '<button id="inputButton" data-id="' + counter + '">Submit</button>';

// Set infowindow content
infowindow.setContent(inputForm);
infowindow.open(map, marker);

// Add marker to markers array
markers[counter] = marker;

var deleteButton = '<button id="deleteButton" data-id="' + counter + '">Delete</button>';

// Right click event (to present delete marker button)
google.maps.event.addListener(marker, 'rightclick', function () {
    infowindow.setContent(deleteButton);
    infowindow.open(map, marker);
});

// Left click event (to present fields to set title)
    google.maps.event.addListener(marker, 'click', function () {
       var markerTitle;
       // Check if marker has title to prevent adding "undefined" to input field
       if (this.getTitle()) {
         markerTitle = this.getTitle();

       } else {

           markerTitle = '';
       }
       // Create title field and submit button
       inputForm = 'Name:  <input type="text" id="nameinput" size="31" maxlength="31" tabindex="1" value="' + markerTitle + '"/>' + '<input type="button" id="inputButton" data-id="' + this.id + '" value="Submit">';
       // Set infowindow content
       infowindow.setContent(inputForm);
       infowindow.open(map, marker);
     });
}

// Function to delete a marker
function deleteMarker(markerId) {

    markers[markerId].setMap(null);
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function (event) {
  var map = null;
  var infowindow = new google.maps.InfoWindow();
  var markers = [];
  var counter = 0;
  $("#showMap").click(function (event) {
    elMapo();
  });

});
