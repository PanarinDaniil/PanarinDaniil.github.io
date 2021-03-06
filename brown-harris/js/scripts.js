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

    $( function() {
        $( ".block-main" ).tabs();
    });

    // appartment SLIDER
    if ( $(".photo-slider").width() > 0 ) {
        $('.photo-slider').slick({
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
            swipeToSlide: true
        });
    }

    // POPUP slider
    if ( $(".fancy").width() > 0 ) {
        $(".fancy").fancybox({
            autoHeight:true,
            padding:0,
            maxWidth:1232,
        });
    }

});