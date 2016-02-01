describe('Jobber', function(){
  it('will create a new Jobber account with the following properties', function(){
    var testJobber = new Jobber("Molly", "Weasley", 53, "Portland", "OR", "Knitting");
    expect(testJobber.firstName).to.equal("Molly");
    expect(testJobber.lastName).to.equal("Weasley");
    expect(testJobber.age).to.equal(53);
    expect(testJobber.city).to.equal("Portland");
    expect(testJobber.state).to.equal("OR");
    expect(testJobber.expertise).to.equal("Knitting");
    });
});
