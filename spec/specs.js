<<<<<<< HEAD
/* Post a Bid Specs
=========================*/

describe('bidPost', function() {
  it('will create a new bid summary based on the following properties', function() {
    var testBidPost = new BidPost("Plant a salsa garden", "$100", "here is a description" "3 hours", "March 1, 2016", "Portland, OR", "Southeast Portland", "Taylor");
    expect(testBidPost.jobTitle).to.equal("Plant a salsa garden");
    expect(testBidPost.payment).to.equal("$100");
    expect(testBidPost.jobDescription).to.equal("here is a description");
    expect(testBidPost.jobDuration).to.equal("3 hours");
    expect(testBidPost.dateCompleted).to.equal("March 1, 2016");
    expect(testBidPost.cityState).to.equal("Portland, OR");
    expect(testBidPost.neighborhood).to.equal("Southeast Portland");
    expect(testBidPost.bidderName).to.equal("Taylor");
  });

  it('will add the bidSummary method to a bidPost', function() {
    var testBidPost = new BidPost("Plant a salsa garden", "$100", "3 hours", "March 1, 2016", "Portland, OR", "Southeast Portland", "Taylor");
    expect(testBidPost.bidSummary()).to.equal("Plant a salsa garden for $100")

// describe("elMapo", function () {
//   it("gets coordinations, queries google maps api and draws a map", function () {
//     var locationObject = { lat: 41.85, lng: -87.65 };
//     expect(elMapo(locationObject)).to.equal();
//   });
// });
