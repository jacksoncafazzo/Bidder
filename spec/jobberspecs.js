describe('Jobber', function(){
  it('will create a new Jobber account with the following properties', function(){
    var testJobber = new Jobber("Molly", "Weasley", "97214", "Gardening", "Knitting");
    expect(testJobber.firstName).to.equal("Molly");
    expect(testJobber.lastName).to.equal("Weasley");
    expect(testJobber.zipcode).to.equal("97214");
    expect(testJobber.jobInterests).to.equal("Gardening")
    expect(testJobber.expertise).to.equal("Knitting");
  });
});
