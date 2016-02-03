/* Business Logic for map */
var count = 0;
var map;
var marker;
var markers = [];
var infowindows = [];
var bidFormInfos = [];
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
      '<h2 id="firstHeading" class="firstHeading">Post A Bid</h2>'+
      '<div id="bodyContent">'+
      '<div class="glyphicon">'+
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

$(".siteNotice").on('click', '#showModal', function() {
    $("#modal").modal('show');
    console.log("this works");
  });


$(document).ready(function() {
  initialize();
<<<<<<< HEAD
  $("#firstHeading").click(function () {
    $("#modal").modal('show');
  });
=======

  $("form#postBid").submit(function(event) {
>>>>>>> bf5ac0fca7fb23756c4b598e6d0eb867e633bd9f

  $("form#postBid").submit(function(event) {
    count += 1;
    var inputtedjobTitle = $("input#jobTitle").val();
    var inputtedPayment = $("input#payment").val();
    var inputtedjobDuration = $("input#jobDuration").val();
    var inputtedDateCompleted = $("input#dateCompleted").val();
    var inputtedCityState = $("input#cityState").val();
    var inputtedNeighborhood = $("input#neighborhood").val();
    var inputtedBidderName = $("input#bidderName").val();

    var newBid = new BidPost(inputtedjobTitle, inputtedPayment, inputtedjobDuration, inputtedDateCompleted, inputtedCityState, inputtedNeighborhood, inputtedBidderName);

    bidFormInfos.push(newBid);
    console.log(bidFormInfos[count - 1]);


    $("#bidList").prepend('<div class="panel-group userPanel" id="accordion" role="tablist" aria-multiselectable="true">' +
     '<div class="panel panel-default">' +
       '<div class="panel-heading" role="tab" id="userBid">' +
         '<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#userCollapse'+ count +'"' + ' aria-expanded="true" aria-controls="userCollapse'+ count +'">' +
           '<h4>' + newBidPost.bidSummary() + '</h4>' +
         '</a>' +
       '</div>' +
       '<div id="userCollapse'+ count +'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="userBid">' +
         '<div class="panel-body">' +
           '<ul>' +
             '<li>' + inputtedjobDescription + '</li>' +
             '<li>Job Duration:' + " " + inputtedjobDuration + '</li>' +
             '<li>Date to be completed by:' + " " + inputtedDateCompleted + '</li>' +
             '<li>Location:' + " " + inputtedCityState + '</li>' +
             '<li>Neighborhood:' + " " + inputtedNeighborhood + '</li>' +
             '<li>Bidder Name:' + " " + inputtedBidderName + '</li>' +
           '</ul>' +
           '<button id="interested" class="btn btn-default">Interested!</button>' +
         '</div>' +
       '</div>' +
     '</div>' +
     '</div>');

    $("#modal").modal('hide');

    $("input#jobTitle").val("");
    $("input#payment").val("");
    $("input#jobDuration").val("");
    $("input#dateCompleted").val("");
    $("input#cityState").val("");
    $("input#neighborhood").val("");
    $("input#bidderName").val("");

  });

});
