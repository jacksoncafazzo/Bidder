/* Business Logic for map */
var count = 0;
var map;
var marker;
var markers = [];
var infowindows = [];
var bidFormInfos = [];
var coordinates = [];
var myLatLng = { lat: 45.521079, lng: -122.677585 };
var imageData;
var bid_icon = 'img/bid_icon.png';
var jobber_icon = 'img/jobber_hat.png';



function initialize () {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  map.addListener("click", function (event) {
    myLatLng = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    $("#modal").modal('show');
  });
  return map;
}

google.maps.event.addDomListener(window, 'load', initialize);

function createBidMarker(newBid) {
  var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h2 id="firstHeading" class="firstHeading">' + newBid.jobTitle + '</h2>'+
  '<div id="bid-info-window">' +
  '<p><strong>Proposed Payment:</strong> $' + newBid.payment + '</p>'+
  '<p><strong>Job Description:</strong> '+ newBid.jobDescription +
  '</p>' +
  '<p><strong>Job Duration:</strong> ' + newBid.jobDuration + '</p>'+
  '<p><strong>Complete By:</strong> ' + newBid.dateCompleted + '</p>'+
  '<p><strong>City and State:</strong> ' + newBid.cityState + '</p>'+
  '<p><strong>Neighborhood:</strong> ' + newBid.neighborhood + '</p>'+
  '<p id="bidderName"><strong>Bidder Name:</strong> ' + newBid.bidderName +
  '</p>' + '<div class="centerButton">' +
  '<button class="btn btn-default interestedButton" type="submit" data-toggle="modal" data-target="#interestedJobberModal">I\'m interested!</button>' +
  '</div>' +
  '</div>' +
  '</div>';

  var infowindow = new google.maps.InfoWindow( {
  content: contentString,
  });
  infowindows.push(infowindow);

  var marker = new google.maps.Marker({
    position: myLatLng,
    icon: bid_icon,
    map: map,
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

if (newBid.marker === undefined) {
  newBid.marker = [];
}

for (var i = 0; i < newBid.marker.length; i++) {
  marker = newBid.marker[i]
  marker.setMap(map);
}

return newBid;
}

/* business logic for form and bidSummary */

function BidPost(jobTitle, payment, jobDuration, dateCompleted, cityState, neighborhood, bidderName, jobDescription, marker, bids) {
  this.jobTitle = jobTitle;
  this.payment = payment;
  this.jobDuration = jobDuration;
  this.dateCompleted = dateCompleted;
  this.cityState = cityState;
  this.neighborhood = neighborhood;
  this.bidderName = bidderName;
  this.jobDescription = jobDescription;
  this.marker = marker;
  this.bids = bids;
}

BidPost.prototype.bidSummary = function() {
  return this.jobTitle + " for $" + this.payment;
}

function randomJobbers () {
  var bounds = {
    north: 45.5340144,
    south: 45.5193211,
    east: -122.6619460,
    west: -122.6827630
  };
  var lngSpan = bounds.east - bounds.west;
  var latSpan = bounds.north - bounds.south;
  var lat = bounds.south + latSpan * Math.random();
  var lng = bounds.west + lngSpan * Math.random();
  coordinates.push(lat);
  coordinates.push(lng);
  makeJobberMarkers(coordinates);
}

function makeJobberMarkers (coordinates) {
  var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h2 id="firstHeading" class="firstHeading">Jobber the Jobber</h2>'+
  '<div id="bid-info-window">' +
  '<p><strong>Suggested Pay Range:</strong> $10-20/hr</p>'+
  '<p><strong>Jobber Description:</strong>This is one hard-working dude'
  '</p>' +
  '<p><strong>Jobber Availability:</strong> </p>'+
  '<p><strong>Complete By:</strong> TBA </p>'+
  '<p><strong>City and State:</strong> Portland, OR</p>'+
  '<p><strong>Neighborhood:</strong> Neighborhood Near You</p>'+
  '<p id="jobberName"><strong>Jobber Name:</strong> '
  '</p>' + '<div class="centerButton">' +
  '<button class="btn btn-default interestedButton" type="submit" data-toggle="modal" data-target="#interestedJobberModal">I\'m interested!</button>' +
  '</div>' +
  '</div>' +
  '</div>';
  debugger;
  var infowindow = new google.maps.InfoWindow( {
  content: contentString,
  });

  infowindows.push(infowindow);
  var jobberLocation = { "lat": coordinates[0], "lng": coordinates[1] }
  var marker = new google.maps.Marker({
    position: coordinates,
    icon: jobber_icon,
    map: map,
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  marker.setMap(map);
}

$(document).ready(function() {
  $("#firstHeading").click(function () {
    $("#modal").modal('show');
  });
  initialize();


  $("#modalSubmit").click(function(event) {
    event.preventDefault();

    count += 1;
    var inputtedjobTitle = $("input#jobTitle").val();
    var inputtedPayment = $("input#payment").val();
    var inputtedjobDuration = $("input#jobDuration").val();
    var inputtedDateCompleted = $("input#dateCompleted").val();
    var inputtedCityState = $("input#cityState").val();
    var inputtedNeighborhood = $("input#neighborhood").val();
    var inputtedjobDescription = $("input#jobDescription").val();
    var inputtedBidderName = $("input#bidderName").val();
    var newBid = new BidPost(inputtedjobTitle, inputtedPayment, inputtedjobDuration, inputtedDateCompleted, inputtedCityState, inputtedNeighborhood, inputtedBidderName, inputtedjobDescription, myLatLng);
    // debugger;
    map = initialize(newBid);
    if (newBid.bids === undefined) {
      newBid.bids = [];
      newBid.bids.push(newBid);
    }


    var jobber;
    for (var i = 0; i < 8; i++) {
      jobber = randomJobbers();
    }


    for (var i = 0; i < Object.keys(newBid.bids).length; i++) {
      newBid = newBid.bids[i];
      newBid = (createBidMarker(newBid));
    }
    newBid.bids.push(newBid);

    $("#bidList").prepend('<div class="panel-group userPanel" id="accordion" role="tablist" aria-multiselectable="true">' +
     '<div class="panel panel-default">' +
       '<div class="panel-heading" role="tab" id="userBid">' +
         '<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#userCollapse'+ count +'"' + ' aria-expanded="true" aria-controls="userCollapse'+ count +'">' +
           '<h4>' + newBid.bidSummary() + '</h4>' +
         '</a>' +
       '</div>' +
       '<div id="userCollapse'+ count +'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="userBid">' +
         '<div class="panel-body">' +
           '<ul>' +
             '<li>' + newBid.jobDescription + '</li>' +
             '<li>Job Duration:' + " " + newBid.jobDuration + '</li>' +
             '<li>Date to be completed by:' + " " + newBid.DateCompleted + '</li>' +
             '<li>Location:' + " " + newBid.CityState + '</li>' +
             '<li>Neighborhood:' + " " + newBid.Neighborhood + '</li>' +
             '<li>Bidder Name:' + " " + newBid.BidderName + '</li>' +
           '</ul>' +
           '<button class="btn btn-default interestedButton" type="submit" data-toggle="modal" data-target="#interestedJobberModal">I\'m interested!</button>' +
         '</div>' +
       '</div>' +
     '</div>' +
     '</div>');
    $("#modal").modal('hide');

    $("input#jobTitle").val("");
    $("input#payment").val("");
    $("input#jobDescription").val("");
    $("input#jobDuration").val("");
    $("input#dateCompleted").val("");
    $("input#cityState").val("");
    $("input#neighborhood").val("");
    $("input#bidderName").val("");


    // bidsAndMarkers = createBidMarker(newBid, count);
  });
});
  // event.preventDefault();
