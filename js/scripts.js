/* Business Logic for Post a Bid */

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

function BidSuggester(jobType, difficultyLevel, paymentRange) {
  this.jobType = jobType;
  this.difficultyLevel = difficultyLevel;
  this.paymentRange = paymentRange;
}

BidSuggester.prototype.range = function() {
  if(this.difficultyLevel === "Level 1");
    return this.
}






// $(document)ready(function(){
//   $("form#bidSuggester").submit(function(){
//     var inputtedJobType = $("input#jobType").val();
//   });
// });

// $(document)ready(function() {
//   $("form#postBid").submit(function(event) {
//     var inputtedjobTitle = $("input#jobTitle").val();
//     var inputtedPayment = $("input#payment").val();
//     var inputtedjobDuration = $("input#jobDuration").val();
//     var inputtedDateCompleted = $("input#dateCompleted").val();
//     var inputtedCityState = $("input#cityState").val();
//     var inputtedNeighborhood = $("input#neighborhood").val();
//     var inputtedBidderName = $("input#bidderName").val();
//
//     var newBid = new BidPost(inputtedjobTitle, inputtedPayment, inputtedjobDuration, inputtedDateCompleted, inputtedCityState, inputtedNeighborhood, inputtedBidderName);
//
//     $("#bidList").show();
//     $("ul#bids").append("<li>" + BidPost.bidSummary + "</li>");
//
//     $("input#jobTitle").val("");
//     $("input#payment").val("");
//     $("input#jobDuration").val("");
//     $("input#dateCompleted").val("");
//     $("input#cityState").val("");
//     $("input#neighborhood").val("");
//     $("input#bidderName").val("");
//   });
// });
