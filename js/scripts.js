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
