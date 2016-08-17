describe('Fizz Buzz sample', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('fizzbuzz.html');
    $.holdReady(false);
  });

  describe("displays text", function() {

    it("when button is clicked", function() {
      $('#number').val(5);
      $('#click_me').trigger('click');
      expect($('#display_message').text()).toBe('buzz');
    });
  });
});
