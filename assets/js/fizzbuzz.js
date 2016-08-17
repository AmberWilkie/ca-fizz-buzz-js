function FizzBuzz() {};

FizzBuzz.prototype.count = function(num) {
  if (num % 3 == 0) {
    return "fizz";
  };
};
