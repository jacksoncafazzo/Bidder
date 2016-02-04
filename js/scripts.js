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

/* Business Logic for Bid Suggester */

function BidSuggester(jobType, difficultyLevel, paymentRange) {
  this.jobType = jobType;
  this.difficultyLevel = difficultyLevel;
  this.paymentRange = paymentRange;
}

BidSuggester.prototype.range = function() {
  if (this.difficultyLevel === "Level 1") {
    return this.paymentRange = "$5-20";
  }
  else if (this.difficultyLevel === "Level 2") {
    return this.paymentRange = "$20-40";
  }
  else if (this.difficultyLevel === "Level 3") {
    return this.paymentRange = "$40-60";
  }
  else if (this.difficultyLevel === "Level 4") {
    return this.paymentRange = "$60-80";
  }
  else if (this.difficultyLevel === "Level 5") {
    return this.paymentRange = "$80-100";
  }
  else {
    return this.paymentRange = "No suggestion at this time.";
  }
};


$(document).ready(function(){
  $("form#bidSuggester").submit(function(){
    debugger;

    var inputtedjobType = $("#jobType option:selected").text();
    var inputtedDifficulty = $("select#jobType").val();
    var bidSuggester = new BidSuggester(inputtedjobType, inputtedDifficulty);
    var bidRange = bidSuggester.range();

    $("#modal").modal('show');
    $("#jobTitle").text(inputtedjobType);
    $(".priceRange").text(bidRange);

    $("select#jobType").val("- Select One-");
    $("#jobType option:selected").val("");

    event.preventDefault();
  });
});















/* Bottom of scripts*/
