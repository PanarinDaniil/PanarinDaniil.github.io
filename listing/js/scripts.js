$(document).ready(function(){
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  adaptiveHeight: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 4,
	  swipeToSlide: true,
	  asNavFor: '.slider-for',
	  focusOnSelect: true,
	  infinite: false,
	  adaptiveHeight: true
	});

	$( ".slider-nav .slick-list" ).mouseover(function() {
		$(".slider-nav").addClass("active");
	});
	$( ".slider-nav .slick-list" ).mouseout(function() {
		$(".slider-nav").removeClass("active");
	});
});