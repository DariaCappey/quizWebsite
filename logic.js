$(document).ready(function(){

  $(".background_1 .button_next").click(function(){
    $(".background_2").css("display","flex");
    $(".background_1").slideUp("slow");
    $('.background_1 [class^="question_"]').fadeOut("slow");
    $(".button_next").css("display","none");
    $('input[type="radio"]:checked').prop("checked",false);
  });

  $(".background_1 .button_check").click(function(){
    ans = document.querySelector('input[type="radio"]:checked').value;
    console.log(ans);
    
    if (ans == "richtig") {
      $('input[type="radio"]:checked + label img').css("border-color","green");
      $(".button_next").css("display","block");
    } else {
      $('input[type="radio"]:checked + label img').css("border-color","red");
    }
  });

  $(".background_2 .button_check").click(function(){
    ans = document.getElementsByClassName("q2_inputs");
    console.log(ans);
    var right = true;
    var wrong = [];
    Array.from(ans).forEach(checkValue);

    function checkValue(item) {
      if (item.value != item.name){
        right = false;
        wrong.push(item);
      }
    }

    if (right){
      $('input[type="text"]').css("border-color","green");
      $(".button_next").css("display","block");
    } else {
      wrong.forEach(function(item){
        item.style["border-color"] = "red";
      })
    }
  });
});