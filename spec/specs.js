describe("elMapo", function () {
  it("gets coordinations, queries google maps api and draws a map", function () {
    var locationObject = { lat: 41.85, lng: -87.65 };
    expect(elMapo(locationObject)).to.equal();
  });
});
