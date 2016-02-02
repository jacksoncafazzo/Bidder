/* Business Logic for map */

var map;
var marker;
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
    markers.push(marker);
    coordinates.push(marker.position.lat(), marker.position.lng());
    console.log("coordinates are: " + coordinates[0] + ", " + coordinates[1]);
    console.log("marker latlong is: " + marker.position.lat(), marker.position.lng());
    console.log("number of marker is: " + markers.length);
  });

}

/* business logic for form and bidSummary */

function BidPost(jobTitle, payment, jobDescription, jobDuration, dateCompleted, cityState, neighborhood, bidderName) {
  this.jobTitle = jobTitle;
  this.payment = payment;
  this.jobDescription = jobDescription,
  this.jobDuration = jobDuration;
  this.dateCompleted = dateCompleted;
  this.cityState = cityState;
  this.neighborhood = neighborhood;
  this.bidderName = bidderName;
}

BidPost.prototype.bidSummary = function() {
  return this.jobTitle + " for $" + this.payment;
}

$(document).on('click', '#showModal', function() {
    $("#modal").modal('show');
  });

$(document).on('click', '#interested', function() {
    $("#interestedModal").modal('show');
  });

$(document).ready(function() {
  initialize();
  $("form#postBid").submit(function(event) {
debugger;
    var inputtedjobTitle = $("input#jobTitle").val();
    var inputtedPayment = $("input#payment").val();
    var inputtedjobDescription = $("input#jobDescription").val();
    var inputtedjobDuration = $("input#jobDuration").val();
    var inputtedDateCompleted = $("input#dateCompleted").val();
    var inputtedCityState = $("input#cityState").val();
    var inputtedNeighborhood = $("input#neighborhood").val();
    var inputtedBidderName = $("input#bidderName").val();

    var newBidPost = new BidPost(inputtedjobTitle, inputtedPayment, inputtedjobDescription, inputtedjobDuration, inputtedDateCompleted, inputtedCityState, inputtedNeighborhood, inputtedBidderName);

    $(".userPanel").show();
    $(".user-panel-title").append(newBidPost.bidSummary());



    $(".userDescription").text(inputtedjobDescription);
    $(".userDate").text(inputtedDateCompleted);
    $(".userLocation").text(inputtedCityState);
    $(".userNeighborhood").text(inputtedNeighborhood);
    $(".userName").text(inputtedBidderName);

    $("#modal").modal('hide');

    $("input#jobTitle").val("");
    $("input#payment").val("");
    $("input#jobDescription").val("");
    $("input#jobDuration").val("");
    $("input#dateCompleted").val("");
    $("input#cityState").val("");
    $("input#neighborhood").val("");
    $("input#bidderName").val("");

    event.preventDefault();

  });
});
