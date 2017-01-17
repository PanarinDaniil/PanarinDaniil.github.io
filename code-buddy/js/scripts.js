WebFontConfig = 
    {
    	google:{
    		families:[
    			"Open+Sans:400,600,700,700i&amp;subset=latin-ext"
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

$(document).ready(function(){
    $(".mob-btn").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $(".layout, .right-header").toggle($(this).hasClass("active"));
    });

    $('.layout').click(function() {
        $(".mob-btn").removeClass("active");
        $(".layout, .right-header").hide('fast');
    });
    if ( $(".home-form").length ) {
        $(".home-form").validate({
            rules: {
                topName: {
                    required: true,
                    minlength:2
                },
                topEmail: {
                    required: true,
                    email: true
                },
                topMsg: {
                    required: true,
                    minlength:10
                }
            }
        });
    }
    if ( $(".contact-form").length ) {
        $(".contact-form").validate({
            rules: {
                conName: {
                    required: true,
                    minlength:2
                },
                conEmail: {
                    required: true,
                    email: true
                },
                conPhone: {
                    required: true,
                    minlength:10
                },
                conMsg: {
                    required: true,
                    minlength:10
                }
            }
        });
    }
    if ( $(".footer-form").length ) {
        $(".footer-form").validate({
            rules: {
                emailF: {
                    required: true,
                    email: true
                }
            }
        });
    }
    if ( $(".slider").length ) {
        $('.slider').slick({
            lazyLoad: 'ondemand',
            dots: true,
            arrows: false,
            autoplaySpeed: 10000,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }
});