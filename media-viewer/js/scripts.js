$(document).ready(function(){
	// initialization of number of current & all slides
	$('#slider-for').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		var current = $('.all-slides .current'),
		numberSlides = $('.all-slides .number-slides');
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    current.text(i);
	    numberSlides.text(slick.slideCount);
	});
	$('#slider-for-image').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		var current = $('.image-slides .current'),
		numberSlides = $('.image-slides .number-slides');
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    current.text(i);
	    numberSlides.text(slick.slideCount);
	});
	$('#slider-for-building').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	    var current = $('.building-slides .current'),
		numberSlides = $('.building-slides .number-slides');
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    current.text(i);
	    numberSlides.text(slick.slideCount);
	});
	$('#slider-for-floorplan').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	    var current = $('.floorplan-slides .current'),
		numberSlides = $('.floorplan-slides .number-slides');
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    current.text(i);
	    numberSlides.text(slick.slideCount);
	});
	// END initialization of number of current & all slides

	// Sliders initialization
	$('#slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  infinite: false,
	  asNavFor: '#slider-nav',
	});
	$('#slider-nav').slick({
	  slidesToShow: 10,
	  slidesToScroll: 1,
	  asNavFor: '#slider-for',
	  swipeToSlide: true,
	  focusOnSelect: true,
	  arrows: true,
	  dots: true,
	  infinite: false
	});
	$('#slider-for-building').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  infinite: false,
	  asNavFor: '#slider-nav-building',
	});
	$('#slider-nav-building').slick({
	  slidesToShow: 10,
	  slidesToScroll: 1,
	  asNavFor: '#slider-for-building',
	  swipeToSlide: true,
	  focusOnSelect: true,
	  arrows: true,
	  dots: true,
	  infinite: false
	});
	$('#slider-for-image').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  infinite: false,
	  asNavFor: '#slider-nav-image',
	});
	$('#slider-nav-image').slick({
	  slidesToShow: 10,
	  slidesToScroll: 1,
	  asNavFor: '#slider-for-image',
	  swipeToSlide: true,
	  focusOnSelect: true,
	  arrows: true,
	  dots: true,
	  infinite: false
	});
	$('#slider-for-floorplan').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  infinite: false,
	  asNavFor: '#slider-nav-floorplan',
	});
	$('#slider-nav-floorplan').slick({
	  slidesToShow: 10,
	  slidesToScroll: 1,
	  asNavFor: '#slider-for-floorplan',
	  swipeToSlide: true,
	  focusOnSelect: true,
	  arrows: true,
	  dots: true,
	  infinite: false
	});
	// END Sliders initialization

	// slide change on "<-" & "->" keys press
	$(document).keydown( function(e) {
		if(e.which==37) {
			$('.slider-for').find('.slick-prev').click();
			$('.slider-nav').find('.slick-prev').click();
		} else if(e.which==39) {
			$('.slider-for').find('.slick-next').click();
			$('.slider-nav').find('.slick-next').click();
		}
	});
	// END slide change on "<-" & "->" keys press

	// Show number of slides for each filter
	function countSlides(dataValue){
		var number = 0;
		var tempClass = "filter-" + dataValue;
		$("#slider-for .filter-all").each(function( index ) {
			if ( $(this).hasClass(tempClass) ) {
				number++;
			}
		});
		return number;
	};
	(function (){
		$('.product-button').each(function(){
			var tempDataValue = $(this).attr('data-value');
			var currentNumber = countSlides(tempDataValue);
			$(this).find("i").text(currentNumber);
		});
	}());
	// END Show number of slides for each filter

	// filtering slides
	$(".slider-pagination").css("visibility", "hidden").css("opacity", "0");
	$(".all-slides").css("visibility", "visible").css("opacity", "1");
	$("#slider-for-floorplan").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	$("#slider-nav-floorplan").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	$("#slider-for-image").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	$("#slider-nav-image").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	$("#slider-for-building").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	$("#slider-nav-building").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");

	$('.product-button').on('click', function () {
	    var filtername = $(this).attr('data-value');
	    $('.product-button').removeClass('active');
        $(this).addClass('active');
	    if ( filtername === "images" ) {
	    	$(".slider-for")[2].slick.slickGoTo(0);
	    	$(".slider-nav")[2].slick.slickGoTo(0);
	    	$(".slider-pagination").css("visibility", "hidden").css("opacity", "0");
	    	$(".image-slides").css("visibility", "visible").css("opacity", "1");
	    	$("#slider-for").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-nav").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-for-building").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-nav-building").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-for-floorplan").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-nav-floorplan").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-for-image").css("opacity","1").css("visibility","visible").css("max-height","none");
	    	$("#slider-nav-image").css("opacity","1").css("visibility","visible").css("max-height","none").css("marginTop","35px");
	    } else if (filtername === "buildings") {
	    	$('.slider-for')[1].slick.slickGoTo(0);
	    	$('.slider-nav')[1].slick.slickGoTo(0);
	    	$(".slider-pagination").css("visibility", "hidden").css("opacity", "0");
	    	$(".building-slides").css("visibility", "visible").css("opacity", "1");
	    	$("#slider-for").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-nav").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-for-image").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-nav-image").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-for-floorplan").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-nav-floorplan").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-for-building").css("opacity","1").css("visibility","visible").css("max-height","none");
	    	$("#slider-nav-building").css("opacity","1").css("visibility","visible").css("max-height","none").css("marginTop","35px");
	    } else if (filtername === "floorplans"){
	    	$('.slider-for')[3].slick.slickGoTo(0);
	    	$('.slider-nav')[3].slick.slickGoTo(0);
	    	$(".slider-pagination").css("visibility", "hidden").css("opacity", "0");
	    	$(".floorplan-slides").css("visibility", "visible").css("opacity", "1");
	    	$("#slider-for").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-nav").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-for-image").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-nav-image").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-for-building").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-nav-building").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-for-floorplan").css("opacity","1").css("visibility","visible").css("max-height","none");
	    	$("#slider-nav-floorplan").css("opacity","1").css("visibility","visible").css("max-height","none").css("marginTop","35px");
	    } else {
	    	$('.slider-for')[0].slick.slickGoTo(0);
	    	$('.slider-nav')[0].slick.slickGoTo(0);
	    	$(".slider-pagination").css("visibility", "hidden").css("opacity", "0");
	    	$(".all-slides").css("visibility", "visible").css("opacity", "1");
	    	$("#slider-for-floorplan").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-nav-floorplan").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-for-image").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-nav-image").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-for-building").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-nav-building").css("opacity","0").css("visibility","hidden").css("max-height","0").css("margin","0");
	    	$("#slider-for").css("opacity","1").css("visibility","visible").css("max-height","none");
	    	$("#slider-nav").css("opacity","1").css("visibility","visible").css("max-height","none").css("marginTop","35px");
	    }
	});
	// END filtering slides

	// $("#slider-nav .slick-slide").on("click", function() {
	// 	var clickedthumb = $(this).attr('aria-describedby').replace('slick-slide1','');
	// 	console.log(clickedthumb);
 //        $('#slider-nav')[0].slick.slickGoTo(clickedthumb);
	// });
});