$(document).ready(function(){

  var score = 5;

  $(".background_1 .button_next").click(function(){
    $(".background_2").css("display","flex");
    $(".background_1").slideUp("slow");
    $('.background_1 [class^="question_"]').fadeOut("slow");
    $(".button_next").css("display","none");
    $('input[type="radio"]:checked').prop("checked",false);
  });

  $(".background_2 .button_next").click(function(){
    $(".background_3").css("display","flex");
    $(".background_2").slideUp("slow");
    $('.background_2 [class^="question_"]').fadeOut("slow");
    $(".button_next").css("display","none");
    $('input[type="text"]').css("border-color","grey");
  });

  $(".background_3 .button_next").click(function(){
    blendEndIn('.success');
  });

  $(".background_1 .button_check").click(function(){
    checkScore();
    ans = document.querySelector('input[type="radio"]:checked').value;
    console.log(ans);
    console.log(this)
    if (ans == "richtig") {
      $('input[type="radio"]:checked + label img').css("border-color","green");
      $(".button_next").css("display","block");
    } else {
      score = score - 1;
      $('input[type="radio"]:checked + label img').css("border-color","red");
    }
  });

  $(".background_2 .button_check").click(function(){
    checkScore();
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
      score = score - 1;
      wrong.forEach(function(item){
        item.style["border-color"] = "red";
      })
    }
  });

  $(".background_3 .button_check").click(function(){
    checkScore();
    ans = document.getElementById('q3_input');
    console.log(ans);
    if (ans.value.toLowerCase() != ans.name.toLowerCase()){
      score = score - 1;
      ans.style["border-color"] = "red";
    } else {
      $('input[type="text"]').css("border-color","green");
      $(".button_next").css("display","block");
    }
  });

  function checkScore() {
    console.log(score)
    if (score == 0){
      blendEndIn('.failed');
    }
  }

  function blendEndIn(cls){
    $(cls).fadeIn(1200);
    $(cls).css("display","flex");
    $(cls + ' [class^="question"]').css("display","none");
    setTimeout(function() {
      $(cls + ' [class^="question"]').fadeIn(1200);
      $(cls + ' [class^="question"]').css("transition","height 2s");
      $(cls + ' [class^="question"]').css("height","250px");
    }, 1500);
    $('[class^="background_"]').css("display","none");
  }
});