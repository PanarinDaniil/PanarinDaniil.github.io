$(document).ready(function(){
	var current = $('.current'),
		numberSlides = $('.number-slides');

	// initialization of number of current & all slides
	$('#slider-for').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
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
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  asNavFor: '#slider-for',
	  swipeToSlide: true,
	  // centerMode: true,
	  focusOnSelect: true,
	  arrows: true,
	  dots: true,
	  infinite: false
	});
	// END Sliders initialization

	// slide change on "<-" & "->" keys press
	$(document).keydown( function(e) {
		if(e.which==37) {
			$('#slider-for').find('.slick-prev').click();
			$('#slider-nav').find('.slick-prev').click();
		} else if(e.which==39) {
			$('#slider-for').find('.slick-next').click();
			$('#slider-nav').find('.slick-next').click();
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
	var filtered = false;
	$('.product-button').on('click', function () {
	    var filtername = $(this).attr('data-value');
	    var currentclass = $(this).attr('class');
	    if (filtered === false) {
	        $('#slider-nav').slick('slickUnfilter');
	        $('#slider-for').slick('slickUnfilter');
	        $('#slider-nav').slick('slickFilter', '.filter-' + filtername);
	        $('#slider-for').slick('slickFilter', '.filter-' + filtername);
	        var mainSlider = $('#slider-for'),
	        	thumbSlider = $('#slider-nav');
	        mainSlider[0].slick.slickGoTo(0);
	        thumbSlider[0].slick.slickGoTo(0);
	        $('.product-button').removeClass('active');
	        $(this).addClass('active');
	        filtered = true;
	    } else {
	        $('#slider-nav').slick('slickUnfilter');
	        $('#slider-for').slick('slickUnfilter');
	        $('#slider-nav').slick('slickFilter', '.filter-' + filtername);
	        $('#slider-for').slick('slickFilter', '.filter-' + filtername);
	        var mainSlider = $('#slider-for'),
	        	thumbSlider = $('#slider-nav');
	        mainSlider[0].slick.slickGoTo(0);
	        thumbSlider[0].slick.slickGoTo(0);
	        $('.product-button').removeClass('active');
	        $(this).addClass('active');
	        filtered = false;
	    }
	});
	// END filtering slides

	$("#slider-nav .slick-slide").on("click", function() {
		var clickedthumb = $(this).attr('aria-describedby').replace('slick-slide1','');
		// var clickedthumb = $(this).attr('data-slick-index');
		console.log(clickedthumb);
        $('#slider-nav')[0].slick.slickGoTo(clickedthumb);
	});
});