$(document).ready(function() {
	(function() {
    "use strict";
// MENU
    var toggles = document.querySelectorAll(".menu_btn");
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
    $('.layout').click(function() {
      ($(".menu_btn").hasClass("is-active") === true) ? $(".menu_btn").removeClass("is-active")  : $(".menu_btn").addClass("is-active");
      $(".menu-section").hide(1000);
      ($(".menu_btn").hasClass("is-active") === true) ? $(".layout").toggle('wiggle') : $(".layout").hide('wiggle');
    });
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active")  : this.classList.add("is-active");
        (this.classList.contains("is-active") === true) ? $(".layout").toggle('wiggle') : $(".layout").hide('wiggle');
        (this.classList.contains("is-active") === true) ? $(".menu-section").toggle('wiggle') : $(".menu-section").hide('wiggle');
      });
    }
// END MENU
// CALL TOP
    var togglesUp = document.querySelectorAll(".call_btn");
    for (var i = togglesUp.length - 1; i >= 0; i--) {
      var toggleUp = togglesUp[i];
      toggleHandlerUp(toggleUp);
    };
    $('#call_close').click(function() {
      $("#call_back").hide(1000);
      ($(".call_btn").hasClass("active") === true) ? $(".call_btn").removeClass("active")  : $(".call_btn").addClass("active");
    });
    function toggleHandlerUp(toggleUp) {
      toggleUp.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("active") === true) ? this.classList.remove("active")  : this.classList.add("active");
        (this.classList.contains("active") === true) ? $("#call_back").toggle(1000) : $("#call_back").hide(1000);
      });
    }
// END CALL TOP
// CALL BOTTOM
    var togglesDown = document.querySelectorAll(".question_btn");
    for (var i = togglesDown.length - 1; i >= 0; i--) {
      var toggleDown = togglesDown[i];
      toggleHandlerDown(toggleDown);
    };
    $('#question_close').click(function() {
      $("#question_back").hide(1000);
      ($(".question_btn").hasClass("active") === true) ? $(".question_btn").removeClass("active")  : $(".question_btn").addClass("active");
    });
    function toggleHandlerDown(toggleDown) {
      toggleDown.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("active") === true) ? this.classList.remove("active")  : this.classList.add("active");
        (this.classList.contains("active") === true) ? $("#question_back").toggle(1000) : $("#question_back").hide(1000);
      });
    }
// END CALL BOTTOM
// FORM VALIDATION 
  })();
  if ($(".call_back").height) {
    $("#call-back").validate({
      rules: {
        call_tel: {
          required: true,
          minlength:10,
          phoneUA: true //Need to be changed
        }
      },
      messages: {
        call_tel: {
          required: "Введите номер телефона"
        }
      }
    });
  };
  if ($(".inner-form").height) {
    $("#call-back-bot").validate({
      rules: {
        call_tel_bot: {
          required: true,
          minlength:10,
          phoneUA: true //Need to be changed
        },
        call_text_bot: {
          required: true
        }
      },
      messages: {
        call_tel_bot: {
          required: "Введите номер телефона"
        },
        call_text_bot: "Поле является обязательным"
      }
    });
  };
  if ($(".contacts-wrapper").height) {
    $("#contact-form").validate({
      rules: {
        contact_mail: {
          required: true,
          email: true
        },
        contact_text: {
          required: true
        }
      },
      messages: {
        contact_mail: "Неверный e-mail",
        contact_text: "Поле является обязательным"
      }
    });
  };
  if ($("#subscribe-bot").height) {
    $( "#subscribe-bot" ).validate({
      rules: {
        mail: {
          required: true,
          email: true
        }
      },
      messages: {
        mail: "Неверный e-mail"
      }
    });
  };
// SLIDERS
  $('.main-slider').slick({
    lazyLoad: 'ondemand',
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  $('.partners').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.slider-info').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    speed: 1000
  });
});