describe("FizzBuzz", function() {
  var subject;

  beforeEach(function() {
    subject = new FizzBuzz();
  });

  it("returns 'fizz' when 3 is entered", function() {
    expect(subject.count(3)).toEqual("fizz");
  });

  it("returns 'buzz' when 5 is entered", function() {
    expect(subject.count(5)).toEqual("fizz");
  });

  it("returns 'fizzbuzz' when 15 is entered", function() {
    expect(subject.count(15)).toEqual("fizz");
  });

  it("returns the number when 7 is entered", function() {
    expect(subject.count(7)).toEqual(7);
  });

});
