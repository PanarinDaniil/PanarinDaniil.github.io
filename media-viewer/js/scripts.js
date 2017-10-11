$(document).ready(function(){
	$('.slider-for').each(function(key, item) {
		var sliderIdName = 'slider-' + key;
		var sliderNavIdName = 'sliderNav-' + key;
		this.id = sliderIdName;
		$('.slider-nav')[key].id = sliderNavIdName;
		$('#slider-' + key).on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
			var current = $('.slide-' + key + ' .current'),
				numberSlides = $('.slide-' + key + ' .number-slides');
		    var i = (currentSlide ? currentSlide : 0) + 1;
		    current.text(i);
		    numberSlides.text(slick.slideCount);
		});
	});
	// END initialization of number of current & all slides

	// Sliders initialization
	$('.slider-for').each(function(key, item) {
		var sliderIdName = 'slider-' + key;
		var sliderNavIdName = 'sliderNav-' + key;
		var sliderId = '#' + sliderIdName;
		var sliderNavId = '#' + sliderNavIdName;

		$(sliderId).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			infinite: false,
			asNavFor: sliderNavId
		});
		$(sliderNavId).slick({
			slidesToShow: 10,
			slidesToScroll: 1,
			asNavFor: sliderId,
			swipeToSlide: true,
			centerMode: false,
			focusOnSelect: true,
			arrows: true,
			dots: true,
			infinite: false,
			responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 8
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 6
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow:4
			      }
			    },
			    {
			      breakpoint: 450,
			      settings: {
			        slidesToShow:2
			      }
			    }
			]
		});
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
	function countSlides(dataNumber){
		var number = 0;
		var tempClass = "filter-" + dataNumber;
		$("#slider-0 .filter-0").each(function( index ) {
			if ( $(this).hasClass(tempClass) ) {
				number++;
			}
		});
		return number;
	};
	(function (){
		$('.product-button').each(function(){
			var tempDataValue = $(this).attr('data-number');
			var currentNumber = countSlides(tempDataValue);
			$(this).find("i").text(currentNumber);
		});
	}());
	// END Show number of slides for each filter

	// filtering slides
	$(".slider-pagination").css("visibility", "hidden").css("opacity", "0");
	$(".slide-0").css("visibility", "visible").css("opacity", "1");
	$(".slider-for").css("opacity","0").css("visibility","hidden").css("max-height","0").addClass("no-margin");
	$(".slider-nav").css("opacity","0").css("visibility","hidden").css("max-height","0").addClass("no-margin");
	$("#slider-0").css("opacity","1").css("visibility","visible").css("max-height","none");
	$("#sliderNav-0").css("opacity","1").css("visibility","visible").css("max-height","none").removeClass("no-margin");

	$('.product-button').on('click', function () {
	    var filterNumber = $(this).attr('data-number');
	    $('.product-button').removeClass('active');
        $(this).addClass('active');
        if ( filterNumber === "1" ) {
	    	$(".slider-for")[filterNumber].slick.slickGoTo(0);
	    	$(".slider-nav")[filterNumber].slick.slickGoTo(0);
	    	$(".slider-pagination").css("visibility", "hidden").css("opacity", "0");
	    	$(".slide-" + filterNumber).css("visibility", "visible").css("opacity", "1");
	    	$(".slider-for").css("opacity","0").css("visibility","hidden").css("max-height","0").addClass("no-margin");
	    	$(".slider-nav").css("opacity","0").css("visibility","hidden").css("max-height","0").addClass("no-margin");
	    	$("#slider-" + filterNumber).css("opacity","1").css("visibility","visible").css("max-height","none");
	    	$("#sliderNav-" + filterNumber).css("opacity","1").css("visibility","visible").css("max-height","none").removeClass("no-margin");
	    } else if (filterNumber === "2") {
	    	$('.slider-for')[filterNumber].slick.slickGoTo(0);
	    	$('.slider-nav')[filterNumber].slick.slickGoTo(0);
	    	$(".slider-pagination").css("visibility", "hidden").css("opacity", "0");
	    	$(".slide-" + filterNumber).css("visibility", "visible").css("opacity", "1");
	    	$(".slider-for").css("opacity","0").css("visibility","hidden").css("max-height","0").addClass("no-margin");
	    	$(".slider-nav").css("opacity","0").css("visibility","hidden").css("max-height","0").addClass("no-margin");
	    	$("#slider-" + filterNumber).css("opacity","1").css("visibility","visible").css("max-height","none");
	    	$("#sliderNav-" + filterNumber).css("opacity","1").css("visibility","visible").css("max-height","none").removeClass("no-margin");
	    } else if (filterNumber === "3"){
	    	$('.slider-for')[filterNumber].slick.slickGoTo(0);
	    	$('.slider-nav')[filterNumber].slick.slickGoTo(0);
	    	$(".slider-pagination").css("visibility", "hidden").css("opacity", "0");
	    	$(".slide-" + filterNumber).css("visibility", "visible").css("opacity", "1");
	    	$(".slider-for").css("opacity","0").css("visibility","hidden").css("max-height","0").addClass("no-margin");
	    	$(".slider-nav").css("opacity","0").css("visibility","hidden").css("max-height","0").addClass("no-margin");
	    	$("#slider-" + filterNumber).css("opacity","1").css("visibility","visible").css("max-height","none");
	    	$("#sliderNav-" + filterNumber).css("opacity","1").css("visibility","visible").css("max-height","none").removeClass("no-margin");
	    } else if (filterNumber === "4"){
	    	$('.slider-for')[filterNumber].slick.slickGoTo(0);
	    	$('.slider-nav')[filterNumber].slick.slickGoTo(0);
	    	$(".slider-pagination").css("visibility", "hidden").css("opacity", "0");
	    	$(".slide-" + filterNumber).css("visibility", "visible").css("opacity", "1");
	    	$(".slider-for").css("opacity","0").css("visibility","hidden").css("max-height","0").addClass("no-margin");
	    	$(".slider-nav").css("opacity","0").css("visibility","hidden").css("max-height","0").addClass("no-margin");
	    	$("#slider-" + filterNumber).css("opacity","1").css("visibility","visible").css("max-height","none");
	    	$("#sliderNav-" + filterNumber).css("opacity","1").css("visibility","visible").css("max-height","none").removeClass("no-margin");
	    } else if (filterNumber === "5"){
	    	$('.slider-for')[filterNumber].slick.slickGoTo(0);
	    	$('.slider-nav')[filterNumber].slick.slickGoTo(0);
	    	$(".slider-pagination").css("visibility", "hidden").css("opacity", "0");
	    	$(".slide-" + filterNumber).css("visibility", "visible").css("opacity", "1");
	    	$(".slider-for").css("opacity","0").css("visibility","hidden").css("max-height","0").addClass("no-margin");
	    	$(".slider-nav").css("opacity","0").css("visibility","hidden").css("max-height","0").addClass("no-margin");
	    	$("#slider-" + filterNumber).css("opacity","1").css("visibility","visible").css("max-height","none");
	    	$("#sliderNav-" + filterNumber).css("opacity","1").css("visibility","visible").css("max-height","none").removeClass("no-margin");
	    } else {
	    	$('.slider-for')[0].slick.slickGoTo(0);
	    	$('.slider-nav')[0].slick.slickGoTo(0);
	    	$(".slider-pagination").css("visibility", "hidden").css("opacity", "0");
	    	$(".slide-0").css("visibility", "visible").css("opacity", "1");
	    	$(".slider-for").css("opacity","0").css("visibility","hidden").css("max-height","0").addClass("no-margin");
	    	$(".slider-nav").css("opacity","0").css("visibility","hidden").css("max-height","0").addClass("no-margin");
	    	$("#slider-0").css("opacity","1").css("visibility","visible").css("max-height","none");
	    	$("#sliderNav-0").css("opacity","1").css("visibility","visible").css("max-height","none").removeClass("no-margin");
	    }
	});
	// END filtering slides
});