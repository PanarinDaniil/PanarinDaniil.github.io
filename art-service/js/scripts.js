$(document).ready(function() {
	$('.slider').slick({
	  dots: false,
	  arrows: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});
	$('.products').slick({
	  dots: true,
	  arrows: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  swipe: true,
	  swipeToSlide: true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 2
	      }
	    }
	  ]
	});
	$('.products-prod').slick({
	  dots: true,
	  arrows: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  swipe: true,
	  swipeToSlide: true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 2
	      }
	    }
	  ]
	});
	$('.prod-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.prod-nav'
	});
	$('.prod-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  infinite: false,
	  asNavFor: '.prod-for',
	  dots: false,
	  focusOnSelect: true,
	  swipeToSlide:true,
	  responsive: [
	    {
	      breakpoint: 641,
		  settings: {
		    vertical: true,
		    verticalSwiping: true,
		  }
	    }
	  ]
	});

	$('.mob-2,.mob-3,.mob-4').click(function(){
    	$('.mob-button').not($(this)).removeClass('button-open');
    	$('.mob-button').not($(this)).find('.drop-menu').css('display','none');
    	$(this).toggleClass('button-open');
    	$(this).find('.drop-menu').toggle();
    	$('.hidden-menu.drop-menu').css('display','none');
    });
    $('.mob-1').click(function(){
    	$('.mob-button').not($(this)).removeClass('button-open');
    	$('.mob-button').not($(this)).find('.drop-menu').css('display','none');
    	$(this).toggleClass('button-open');
    	$('.hidden-menu.drop-menu').toggle();
    });
    $('.drop-sort1').click(function(){
    	$(this).toggleClass('drop-sort-active');
    	$('.drop-sort2').removeClass('drop-sort-active');
    	$('.aside').css('display','none');
    	$(this).find('.drop-sort-inner').toggle();
    });
    $('.drop-sort2').click(function(){
    	$('.drop-sort1').removeClass('drop-sort-active');
    	$('.drop-sort-inner').css('display','none');
    	$(this).toggleClass('drop-sort-active');
    	$('.aside').toggle();
    });
    $(".topnav").accordion({
		accordion:true,
		speed: 500,
		closedSign: '',
		openedSign: ''
	});
	$(".topnav-index").accordion({
		accordion:true,
		speed: 500,
		closedSign: '',
		openedSign: ''
	});
	$(".aside-catalog").accordion({
		accordion:true,
		speed: 500,
		closedSign: '<i class="fa fa-chevron-right"></i>',
		openedSign: '<i class="fa fa-chevron-down" style="background:#d55857;color:#ffffff;"></i>'
	});
	$(".attribute").accordion({
		accordion:false,
		speed: 500,
		closedSign: '<i class="fa fa-chevron-right"></i>',
		openedSign: '<i class="fa fa-chevron-down" style="color:#d55857;"></i>'
	});
   //  $('.check-radio').iCheck({
   //      checkboxClass: 'icheckbox_flat-red',
   //  	radioClass: 'iradio_flat-red',
   //  	increaseArea: '20%' 
  	// });
  	$('.check-radio').iCheck({
        checkboxClass: 'icheckbox_minimal-red',
    	radioClass: 'iradio_minimal-red',
    	increaseArea: '20%', 
    	mirror: true,
    	checkedLabelClass: 'checked_label'
  	});

});
$(document).ready(function () {
    $('#open-map').click(function () {
        $('.map-modal').toggleClass("active");
    });
    $('#open-map1').click(function () {
        $('.map-modal1').toggleClass("active");
    });
    $('#contacts-feedback').validate();
    $('#checkout-form').validate();
    $('#testimonials-form').validate();
    $('#lk-form').validate();
});