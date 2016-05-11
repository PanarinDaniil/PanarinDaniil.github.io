$(document).ready(function() {
	(function() {
    "use strict";
// MOBILE MENU
    var toggles = document.querySelectorAll(".toogle");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active")  : this.classList.add("is-active");
        (this.classList.contains("is-active") === true) ? $("nav").toggle('wiggle') : $("nav").hide('wiggle');
      });
    }
// END MOBILE MENU
// MOBILE ACCORDEON IN MOBILE MENU
    // if($(window).width()<500) {
    //     resizeIframe(250, 200)
    // }
    // if($(window).width()>=501) {
    //     resizeIframe(420, 200)
    // }

    $(window).on('resize', function() {
      if($(window).width()<769) {
        $('.sub').addClass('accordeon');
      } 
      if($(window).width()>=769){
        $('.sub-menu').removeClass('turn_on');
        $('.sub').removeClass('accordeon').css('display','none');
      }
    // Iframe settings width height
      // if($(window).width()<500) {
      //     resizeIframe(250, 200)
      // } if($(window).width()>= 501) {
      //     resizeIframe(420, 200)
      // }
    });
    $(window).resize();

    var subMenu = document.querySelectorAll(".accordeon-menu");
    for (var i = subMenu.length - 1; i >= 0; i--) {
      var sub = subMenu[i];
      toggleWrapper(sub);
    };
    function toggleWrapper(sub) {
      sub.addEventListener( "click", function(e) {
          (this.classList.contains("turn_on") === true) ? this.classList.remove("turn_on")  : this.classList.add("turn_on");
          (this.classList.contains("turn_on") === true) ? $(this).find(".accordeon").toggle('wiggle') : $(this).find(".accordeon").hide('wiggle');
      });
    }
// END MOBILE ACCORDEON IN MOBILE MENU
  })();

  // FRAME
  var converterFrame = document.getElementById('doc2pdf');
  if (converterFrame){
    converterFrame.src = 'http://online-devel2.sodapdf.com/en/widgets/pdf-converter/word2pdf/';
  }
  // Resize iframe to full height
  function resizeIframe(width, height){
    try{
      if (converterFrame){
        if (width) converterFrame.width = parseInt(width);
        if (height) converterFrame.height = parseInt(height);
      }
    }catch(err){}
  }
  // END FRAME

  // VALIDATION
  $("#mobileForm").validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: "Please enter a valid email address"
    }
  });



  // function randomlinks(){
  //   var myrandom=Math.round(Math.random()*5)
  //   var links=new Array()
  //   links[0]="images/Banner.png"
  //   links[1]="images/Banner1.png"
  //   links[2]="images/Banner2.png"
  //   links[3]="images/Banner3.png"
  //   links[4]="images/Banner4.png"
  //   links[5]="images/Banner5.png"

  //   var banner = links[myrandom];
  //   $('#banner').attr('href', banner);
  // }

  // POPUP
  $(function() {
    $('.popup-link').smallPopup('init');
  });

  // Device behavior
  var isDesctop = device.desktop();
  var apply = '#mob-device';
  var getTrial = 'http://sodapdf.com/free/pdf-converter/gettrial?mkey1=free.pdf-converter';
  $(document).ready(function() {
      if (isDesctop) {
          $('.deviceBehavior').attr('href', getTrial);
          // $('.deviceBehavior').on('mousedown', function() { _gaq.push(['_trackEvent', 'download', 'click', 'free_pdf_converter ']); });
      } else {
          $('.deviceBehavior').attr('href', apply);
      }
  });
});

// RANDOM banner
$( document ).ready(function() { 
  var randomlinks=new Array();
  randomlinks[0]="images/Banner.png"
  randomlinks[1]="images/Banner1.png"
  randomlinks[2]="images/Banner2.png"
  randomlinks[3]="images/Banner3.png"
  randomlinks[4]="images/Banner4.png"
  randomlinks[5]="images/Banner5.png"
  var img_src=randomlinks[Math.floor(Math.random()*randomlinks.length)]
  $("#banner").attr("src", img_src);
    console.log(img_src);
})
