$(document).ready(function(){

  $(".background_1 .button_next").click(function(){
    $(".background_2").css("display","flex");
    $(".background_1").slideUp("slow");
    $('.background_1 [class^="question_"]').fadeOut("slow");
    $(".button_next").css("display","none");
    $('input[type="radio"]:checked').prop("checked",false);
  });

  $(".button_check").click(function(){
    ans = document.querySelector('input[type="radio"]:checked').value;
    console.log(ans);
    if (ans == "richtig") {
      $(".button_next").css("display","block");
    } else {
      $('input[type="radio"]:checked + label img').css("border-color","red");
      setTimeout(function(){
    $('input[type="radio"]:checked + label img').css("border-color","transparent");
      }, 2000);
    }
  });
});