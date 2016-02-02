/* Business Logic for map */

var map;
var marker;
var markers = [];
var infowindows = [];
var coordinates = [];
var myLatLng;
var imageData;

function initialize () {
  markerCounter = markers.length + 1;
  var epicodus = {lat: 45.520705, lng: -122.677397}
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: epicodus,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  map.addListener("click", function (event) {
    markerLatLng = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading"><a href="MODAL-LINK">Post A Bid</a></h1>'+
      '<div id="bodyContent">'+
      '<img src="hypothetical post-bid.png icon prompt">'+
      '<p>Latitude: ' + event.latLng.lat() + '</p>'+
      '<p>Longitude: ' + event.latLng.lng() + '</p>'+
      '</div>'+
      '</div>';

// this is the info window section --- div ids are google ids, do not change
//first we save the click coordinates
    // coordinates.push(event.position.lat(), event.position.lng());
//then we define what the infowindow looks like

      //then we make the window and save it to the infowindows array
    var infowindow = new google.maps.InfoWindow( {
    content: contentString,
    });
    infowindows.push(infowindow);


    var marker = new google.maps.Marker({
      position: markerLatLng,
      // icon: bidder,
      map: map,
    });

    marker.addListener('click', function() {
      // for (var i = 0; i < markers.length; i++) {
      //     if (markers[i] === marker) {
      infowindow.open(map, marker);
        // }
      // }
    });
    markers.push(marker);
    console.log({ lat: event.latLng.lat(), lng: event.latLng.lng() });


    console.log("coordinates are: " + coordinates[0] + ", " + coordinates[1]);
    console.log("marker latlong is: " + marker.position.lat(), marker.position.lng());
    console.log("number of marker is: " + markers.length);
    console.log(infowindow);
  });
}

/* business logic for form and bidSummary */

function BidPost(jobTitle, payment, jobDuration, dateCompleted, cityState, neighborhood, bidderName) {
  this.jobTitle = jobTitle;
  this.payment = payment;
  this.jobDuration = jobDuration;
  this.dateCompleted = dateCompleted;
  this.cityState = cityState;
  this.neighborhood = neighborhood;
  this.bidderName = bidderName;
}

BidPost.prototype.bidSummary = function() {
  return this.jobTitle + " for " + this.payment;
}

$(document).on('click', '#showModal', function() {
    $("#modal").modal('show');
  });


$(document).ready(function() {
  initialize();
  $("form#postBid").submit(function(event) {
    var inputtedjobTitle = $("input#jobTitle").val();
    var inputtedPayment = $("input#payment").val();
    var inputtedjobDuration = $("input#jobDuration").val();
    var inputtedDateCompleted = $("input#dateCompleted").val();
    var inputtedCityState = $("input#cityState").val();
    var inputtedNeighborhood = $("input#neighborhood").val();
    var inputtedBidderName = $("input#bidderName").val();

    var newBid = new BidPost(inputtedjobTitle, inputtedPayment, inputtedjobDuration, inputtedDateCompleted, inputtedCityState, inputtedNeighborhood, inputtedBidderName);

    $("#userAccordion").show();
    $("ul#bids").append("<li>" + BidPost.bidSummary + "</li>");

    $("input#jobTitle").val("");
    $("input#payment").val("");
    $("input#jobDuration").val("");
    $("input#dateCompleted").val("");
    $("input#cityState").val("");
    $("input#neighborhood").val("");
    $("input#bidderName").val("");


  });

});
