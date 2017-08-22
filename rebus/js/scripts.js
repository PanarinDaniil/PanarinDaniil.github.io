// ASYNC FONTS GOOGLE FONTS
WebFontConfig = 
    {
    	google:{
    		families:[
    			"Open+Sans:300,400,400i,600,700&amp;subset=latin-ext"
    		]
    	}
    },
function() {
	var n=document.createElement("script"),t;
	n.src="https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
	n.type="text/javascript";
	n.async="true";
	t=document.getElementsByTagName("script")[0];
	t.parentNode.insertBefore(n,t)
}();

$(document).ready(function() {

//MOBILE MENU
    (function() {
        "use strict";
        var toggles = document.querySelectorAll(".mob-btn");
        for (var i = toggles.length - 1; i >= 0; i--) {
          var toggle = toggles[i];
          toggleHandler(toggle);
        };
        $('.layout').click(function() {
          ($(".mob-btn").hasClass("active") === true) ? $(".mob-btn").removeClass("active")  : $(".mob-btn").addClass("active");
          $(".main-nav").hide(1000);
          ($(".mob-btn").hasClass("active") === true) ? $(".layout").toggle('wiggle') : $(".layout").hide('wiggle');
        });
        function toggleHandler(toggle) {
          toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active")  : this.classList.add("active");
            (this.classList.contains("active") === true) ? $(".layout").toggle('wiggle') : $(".layout").hide('wiggle');
            (this.classList.contains("active") === true) ? $(".main-nav").toggle('wiggle') : $(".main-nav").hide('wiggle');
          });
        }
    })();

//Sticky header
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 110 ) {
            $(".header").addClass('fixed');
        } else {
            $(".header").removeClass('fixed');
        }
    });

// FAQ TOGGLE (HOME PAGE)
    (function() {
        "use strict";
        var toggles = document.querySelectorAll(".js_tog");
        for (var i = toggles.length - 1; i >= 0; i--) {
          var toggle = toggles[i];
          toggleHandler(toggle);
        };
        $('.faq-close').click(function() {
            if ( $(".faq-info").hasClass("active") ) {
                $(".faq-info").removeClass("active");
                $(".faq-info").hide('wiggle');
            }
        });
        function toggleHandler(toggle) {
          toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            ( $(".faq-info").hasClass("active") === true ) ? $(".faq-info").hide('wiggle') : $(".faq-info").toggle('wiggle');
            ( $(".faq-info").hasClass("active") === true ) ? $(".faq-info").removeClass("active") : $(".faq-info").addClass("active");
          });
        }
    })();

// MAIN SLIDER (HOME PAGE)
    /*if ( $(".main-slider").width() > 0 ) {
        $('.main-slider').slick({
            lazyLoad: 'ondemand',
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 10000,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            swipe: true,
            swipeToSlide: true
        });
    }*/

// TESTIMONIAL SLIDER (HOMR PAGE)
    if ( $(".testimonial-slider").width() > 0 ) {
        $('.testimonial-slider').slick({
            lazyLoad: 'ondemand',
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 10000,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            swipe: true,
            swipeToSlide: true,
            responsive: [
              {
                breakpoint: 801,
                settings: {
                    arrows: false
                }
              }
            ]
        });
    }

// PORTFOLIO SLIDER
    /*var counter = false;
    if ( $(".min-carusel").width() > 0 ) {
        if ( window.matchMedia("(max-width:800px)").matches && counter == false ) {
            $('.min-carusel').slick({
                lazyLoad: 'ondemand',
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 10000,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                swipe: true,
                swipeToSlide: true
            });
            counter = true;
        } else if ( window.matchMedia("(min-width:801px)").matches && counter == true ) {
            $('.min-carusel').slick('unslick');
            counter = false;
        }
        $(window).resize(function() {
            if( window.matchMedia("(max-width:800px)").matches && counter == false) {
                $('.min-carusel').slick({
                    lazyLoad: 'ondemand',
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 10000,
                    infinite: true,
                    speed: 500,
                    fade: true,
                    cssEase: 'linear',
                    swipe: true,
                    swipeToSlide: true
                });  
                counter = true;
            } else if ( window.matchMedia("(min-width:801px)").matches && counter == true ) { // must be 17px less then in css
                $('.min-carusel').slick('unslick');
                counter = false;
            }
        });
    }*/

// CONTACT FORM
    if ( $(".contact-form").width() > 0 ) {
        $(".contact-form").validate({
            rules: {
                con_name: {
                    required: true,
                    minlength:2
                },
                con_email: {
                    required: true,
                    email: true
                },
                con_phone: {
                    required: true,
                    minlength:10
                },
                con_msg: {
                    required: true,
                    minlength:10
                }

            },
            submitHandler: function() { 
                $(".fail").removeClass("valid");
                $(".success").addClass("valid");
            },
            invalidHandler: function(event, validator) {
                var errors = validator.numberOfInvalids();
                if (errors) {
                    $(".success").removeClass("valid");
                    $(".fail").addClass("valid");
                } else {
                    $(".fail").removeClass("valid");
                    $(".success").addClass("valid");
                }
            }
        });
    }
    $('.not_req').keypress(function() {
        if ($(this).length) {
            $('.not_req').addClass("not-empty");
        } else {
            $('.not_req').removeClass("not-empty");
        }
    });

// POPUP PORTFOLIO
    if ( $(".portfolio").width() > 0 ) {
        var count = false;
        $(".portfolio").fancybox({
            autoHeight: true,
            padding: 0,
            maxWidth:   1232,
            /*beforeShow: function() {
                if ( count == true ) {
                    $('.pop-slider').slick('unslick');
                    count = false;
                }
            },
            afterShow: function() {
                if ( count == false ) {
                    if ( $('.pop-slider').width() > 0 ) {
                        $('.pop-slider').slick({
                            dots: true,
                            arrows: true,
                            autoplay: true,
                            autoplaySpeed: 6000,
                            infinite: false,
                            speed: 500,
                            fade: true,
                            cssEase: 'linear',
                            swipe: true,
                            swipeToSlide: true
                        });
                        count = true;   
                    }
                } else {
                    $('.pop-slider').slick('unslick');
                    count = false;
                }
            },
            afterClose: function() {
                if ( count == true ) {
                    $('.pop-slider').slick('unslick');
                    count = false;
                }
            }*/
        });
    }

// SWIPE
    if ( $(".portfolio-box.inner").width() > 0 ) {
        $(function() {
            $(".info-left").swipe( {
                swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
                    $('.portfolio-box').removeClass('swiped');
                    $(this).addClass('swiped');
                },
                swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
                    $('.portfolio-box').removeClass('swiped');
                },
                threshold:45
            });
            $(".info-right").swipe( {
                swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
                    $('.portfolio-box').removeClass('swiped');
                    $(this).addClass('swiped');
                },
                swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
                    $('.portfolio-box').removeClass('swiped');
                },
                threshold:45
            });
        });

        $('.image-back').click(function() {
            $('.portfolio-box').removeClass('swiped');
            $(this).closest('.portfolio-box').addClass('swiped');
        });

// Show blocks info on scroll
        // $(window).scroll(function() {
        //     var scroll = $(window).scrollTop();
        //     $('.portfolio-box.inner').each( function () {
        //         var height = $(this).outerHeight(true) + $(this).position().top + 50;
        //         if ( ($(this).position().top - 130 )<= scroll && height >= scroll ) {
        //             $('.portfolio-box.inner').removeClass('swiped');
        //             $(this).addClass('swiped');
        //         } else {
        //             $(this).removeClass('swiped');
        //         }
        //     });
        // });
    }

});