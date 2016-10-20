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
    
    var counter = false;
    if ( $(".min-carusel").width() > 0) {
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
    } 

    // var browserMinWidth = Math.max(
    //   document.body.scrollWidth, document.documentElement.scrollWidth,
    //   document.body.offsetWidth, document.documentElement.offsetWidth,
    //   document.body.clientWidth, document.documentElement.clientWidth
    // );
    // var counter = false;
    // if ( $(".min-carusel").width() > 0) {
    //     if ( browserMinWidth <= '783' ) { 
    //         $('.min-carusel').slick({
    //             lazyLoad: 'ondemand',
    //             dots: true,
    //             arrows: false,
    //             autoplay: true,
    //             autoplaySpeed: 10000,
    //             infinite: true,
    //             speed: 500,
    //             fade: true,
    //             cssEase: 'linear',
    //             swipe: true,
    //             swipeToSlide: true
    //         });
    //         counter = true;
    //     } else if ( browserMinWidth > '784' && counter == true ) { 
    //         $('.min-carusel').slick('unslick');
    //         counter = false;
    //     }
    //     $(window).resize(function() {
    //         var browserMinWidth = Math.max(
    //           document.body.scrollWidth, document.documentElement.scrollWidth,
    //           document.body.offsetWidth, document.documentElement.offsetWidth,
    //           document.body.clientWidth, document.documentElement.clientWidth
    //         );
    //         if( browserMinWidth <= '783' && counter == false) { 
    //             $('.min-carusel').slick({
    //                 lazyLoad: 'ondemand',
    //                 dots: true,
    //                 arrows: false,
    //                 autoplay: true,
    //                 autoplaySpeed: 10000,
    //                 infinite: true,
    //                 speed: 500,
    //                 fade: true,
    //                 cssEase: 'linear',
    //                 swipe: true,
    //                 swipeToSlide: true
    //             });  
    //             counter = true;
    //         } else if ( browserMinWidth > '784' && counter == true ) { 
    //             $('.min-carusel').slick('unslick');
    //             counter = false;
    //         }         
    //     });
    // } 
});