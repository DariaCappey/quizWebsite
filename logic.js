$(document).ready(function(){

  console.log('ready');

  var score = 5;
  var changeBackground = true;

  var images = document.getElementsByClassName("start_img");
  var div = document.getElementById("start_quiz");
  var ct = 0;

  setTimeout(function(){
    var h3 = document.getElementById("change_text");
    $("#change_text").text("Click me!");
    moveDiv();
  }, 3500);
  switchBackground();

  function switchBackground() {
    if (changeBackground){
      var bf = ct - 1;
      if(bf == -1){
        bf = images.length-1;
      }
      if(ct == images.length){
        ct = 0;
      }
      $(images[bf]).fadeOut(1700);
      $(images[ct]).fadeIn(1700);
      ct++;
      setTimeout(switchBackground, 3500);
    }
  }

  var x = Math.random()* (3 - 1) + 1;
  var y = Math.random()* (3 - 1) + 1;
  console.log("x: "+x);
  console.log("y: "+y);

  function moveDiv() {
    if (changeBackground){
      var currentPosition_y = parseInt(div.style.top);
      var currentPosition_x = parseInt(div.style.left);
      
      if ((currentPosition_x + div.clientWidth > window.innerWidth && x > 0) || (currentPosition_x == 0 && x < 0)){
        x = x * (-1);
      }

      if ((currentPosition_y + div.clientHeight > window.innerHeight && y > 0) || (currentPosition_y < 0 && y < 0)){
        y = y * (-1);
      }

      div.style.top = currentPosition_y + y;
      div.style.left = currentPosition_x + x;
      setTimeout(moveDiv, 15);
    }
  }

  $("#start_quiz").click(function(){
    changeBackground = false;
    $(".background_1").css("display","flex");
    $('.start [class^="question_"]').fadeOut("slow");
    $(".start").slideUp("slow");
  });

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
    $(cls + ' [class^="question_wrapper"]').css("display","none");
    setTimeout(function() {
      $(cls + ' [class^="question_wrapper"]').fadeIn(1200);
      $(cls + ' [class^="question_wrapper"]').css("transition","height 2s");
      $(cls + ' [class^="question_wrapper"]').css("height","250px");
    }, 1500);
    $('[class^="background_"]').css("display","none");
  }
});