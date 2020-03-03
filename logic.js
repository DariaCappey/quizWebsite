$(document).ready(function(){
  $(".background_1 .button_next").click(function(){
    $(".background_2").css("display","flex");
    $(".background_1").slideUp("slow");
    $('.background_1 [class^="question_"]').fadeOut("slow");
  });
  $(".button_check").click(function(){
    ans = document.querySelector('input[name="rad"]:checked').value;
    console.log(ans);
    if (ans == "richtig") {
      $('input[type="radio"]:checked + label img').css("border-color","green");
      $(".button_next").css("display","block");
    } else {
      $('input[type="radio"]:checked + label img').css("border-color","red");
      setTimeout(function(){
    $('input[type="radio"]:checked + label img').css("border-color","transparent");
      }, 2000);
    }
  });
});