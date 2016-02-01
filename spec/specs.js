describe('newJobber', function(){
  it('will create a newJobber account with the following properties', function(){
    var testJobber = new Jobber("Molly");
    expect(testJobber.firstName).to.equal("Molly");
    expect(testJobber.lastName).to.equal("Weasley");
    expect(testJobber.age).to.equal(28);
    expect(testJobber.city).to.equal("Portland");
    expect(testJobber.state).to.equal("OR");
    expect(testJobber.expertise).to.equal("Knitting");
    });
});
