$(document).ready(function(){
    $(".book").mouseenter(function(){
        $("#description").animate({
            width:"15%"
        },1000);
    });
    $(".detailes").click(function(){
      $(".cover").fadeIn();
      $(this).next().fadeIn();
      $('html, body').animate({
        scrollTop: $(this).next().offset().top-100
      }, 1000);
      $("body").css("overflow","hidden");
    });
    $(".close").click(function(){
      $(".cover").fadeOut();
      $(".description").fadeOut();
      $("body").css("overflow","auto");
    });

});

function down()
{
    $("#down").css("border","none");
    $("#down").css("margin-top","8px");
    $('html, body').animate({
      scrollTop: $("#sec1").offset().top
    }, 1000);
}


/************************************************* */
      //feedbacks
      function responseMessage(msg) {
        $('.success-box').fadeIn(200);  
        $('.success-box div.text-message').html("<span>" + msg + "</span>");
      }