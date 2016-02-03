/* Business Logic for map */
var count = 0;
var map;
var marker;
var markers = [];
var infowindows = [];
var bidFormInfos = [];
var coordinates = [];
var myLatLng = { lat: 45.521079, lng: -122.677585 };
// $("#map").data(myLatLng);
var imageData;
var bid_icon = 'img/bid_icon.png';
var bidsAndMarkers = [];


function initialize () {
  // myLatLng = $(s"#map").data();

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  map.addListener("click", function (event) {
    myLatLng = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    $("#modal").modal('show');
    // $("#map").data(myLatLng);
  });
  return map;
}

google.maps.event.addDomListener(window, 'load', initialize);

function createBidMarker(newBid) {
  // myLatLng = $("#map").data()

  var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h2 id="firstHeading" class="firstHeading">' + newBid.jobTitle + '</h2>'+
  '<div id="payment-info-window"><p>Proposed Payment: $' + newBid.payment + '</p></div>'+
  '<div class="bid-info-window">'+
  '<p>Job Duration: ' + newBid.jobDuration + '<br>'+
  '<p>Complete By: ' + newBid.dateCompleted + '<br>'+
  '<p>City and State: ' + newBid.cityState + '<br>'+
  '<p>Neighborhood: ' + newBid.neighborhood + '<br>'+
  '<p id="bidderName">Bidder Name: ' + newBid.bidderName +
  '</p><p>Job Description '+ newBid.jobDescription +
  '<p><div id="accept">Accept Bid</div><div id="decline">Decline Bid</div>'+
  '</p>'+
  '</div>';

  var infowindow = new google.maps.InfoWindow( {
  content: contentString,
  });
  infowindows.push(infowindow);
  map = initialize(myLatLng)

  var marker = new google.maps.Marker({
    position: myLatLng,
    icon: bid_icon,
    map: map,
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  // map = new google.maps.Map(document.getElementById("map"), mapOptions);
markers.push(marker);
marker.setMap(map);

return (newBid, marker)
}

/* business logic for form and bidSummary */

function BidPost(jobTitle, payment, jobDuration, dateCompleted, cityState, neighborhood, bidderName, jobDescription) {
  this.jobTitle = jobTitle;
  this.payment = payment;
  this.jobDuration = jobDuration;
  this.dateCompleted = dateCompleted;
  this.cityState = cityState;
  this.neighborhood = neighborhood;
  this.bidderName = bidderName;
  this.jobDescription = jobDescription;
}

BidPost.prototype.bidSummary = function() {
  return this.jobTitle + " for $" + this.payment;
}


$(document).ready(function() {
  initialize();
  //
  // $("#firstHeading").click(function () {
  //   $("#modal").modal('show');
  // });

  $("#modalSubmit").click(function(event) {
    count += 1;
    var inputtedjobTitle = $("input#jobTitle").val();
    var inputtedPayment = $("input#payment").val();
    var inputtedjobDuration = $("input#jobDuration").val();
    var inputtedDateCompleted = $("input#dateCompleted").val();
    var inputtedCityState = $("input#cityState").val();
    var inputtedNeighborhood = $("input#neighborhood").val();
    var inputtedjobDescription = $("input#jobDescription").val();
    var inputtedBidderName = $("input#bidderName").val();

    var newBid = new BidPost(inputtedjobTitle, inputtedPayment, inputtedjobDuration, inputtedDateCompleted, inputtedCityState, inputtedNeighborhood, inputtedBidderName, inputtedjobDescription);

    bidFormInfos.push(newBid);
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
    $("input#jobDescription").val("");
    $("input#jobDuration").val("");
    $("input#dateCompleted").val("");
    $("input#cityState").val("");
    $("input#neighborhood").val("");
    $("input#bidderName").val("");
    bidsAndMarkers = createBidMarker(newBid, count);

  });
  // event.preventDefault();
});
