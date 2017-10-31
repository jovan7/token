$("#wrap").lsPreloader({
  backgroundColor:  "#000",
  backgroundRepeat: "repeat",
  logoImage:      "",
  progressShow:   true,
  progressColor:    "#FFF",
  progressHeight:   "10px",
  progressPosition: "bottom",
  percentShow:    true,
  percentFontFamily:  "Verdana, Geneva, sans-serif",
  percentFontSize:  "50px",
  animationComplete:  "fade",
});

$(function() {

  $(".menu").click(function() {
    $(".line1").toggleClass("animate1");
    $(".line2").toggleClass("animate2");
    $(".line3").toggleClass("animate3");
    $(".nav-wrap").toggleClass("slide-nav");
  });


  $(".city-wrap").hover(function(){
    $(this).find(".cloud").toggle();
  });

  $(window).scroll(function(){
  		var scrollTop = $(this).scrollTop();
  		var about = $(".about-wrap").offset();

      if (scrollTop > 50) {
        $("header").css({"position":"fixed", "margin-top": "0", "background-color": "rgba(255,255,255, .1)"});
        $("header .logo, header .btn-nav").hide();
        $("header nav").css({"top": "5px"});
      } else {
        $("header").css({"position":"absolute", "margin-top": "20px", "background-color": "rgba(255,255,255, 0)"});
        $("header .logo, header .btn-nav").show();
        $("header nav").css({"top": "17px"});
      }

  	});


  	$(".app, .landing-scroll").click(function(){
  		$("html, body").animate({scrollTop: $(".app-wrap").offset().top });
  	});

    $(".how").click(function(){
  		$("html, body").animate({scrollTop: $(".work-wrap").offset().top });
  	});

    $(".mwm").click(function(){
  		$("html, body").animate({scrollTop: $(".mwm-wrap").offset().top });
  	});

    $(".roadmap").click(function(){
  		$("html, body").animate({scrollTop: $(".timeline-wrap").offset().top });
  	});

    $(".team").click(function(){
  		$("html, body").animate({scrollTop: $(".team-wrap").offset().top });
  	});

    //countdown

    $('#clock').countdown('2017/12/10 12:34:56')
      .on('update.countdown', function(event) {
        var format = '%H:%M:%S';
        if(event.offset.totalDays > 0) {
          format = '%-d day%!d ' + format;
        }
        if(event.offset.weeks > 0) {
          format = '%-w week%!w ' + format;
        }
        $(this).html(event.strftime(format));
      })
      .on('finish.countdown', function(event) {
        $(this).html('This offer has expired!')
          .parent().addClass('disabled');

      });

  //counter

  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });

});
