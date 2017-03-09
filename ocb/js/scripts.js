$(document).ready(function(){
    $(".mob-btn").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $(".layout, .top-nav").toggle($(this).hasClass("active"));
    });
    $('.layout').click(function() {
        $(".mob-btn").removeClass("active");
        $(".layout, .top-nav").hide('fast');
    });

    if ( $(".top-slider").length ) {
        $('.top-slider').slick({
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