
var onReadyEvents = function(){
  $('#number').keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $('#click_me').click();
    }});

  $('#click_me').click(function () {
    num = $('#number').val();
    calc = new FizzBuzz();
    msg = calc.count(num);
    $('#display_message').html(msg);
  });
};
