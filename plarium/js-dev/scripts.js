$(document).ready(function() {
    $("#f-mail-form").validate({
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
    $(".fancy").fancybox({
        'beforeShow': function(){
            $(window).on({
                'resize.fancybox' : function(){
                    $.fancybox.update();
                }
            });
         },
         'afterClose': function(){
              $(window).off('resize.fancybox');
         },
         width      : '640',
         height     : '360',
         padding    : 3,
         fitToView  : true,
         closeClick : false,
         openEffect : 'fade',
         closeEffect: 'fade',
         closeBtn   : 'true',
         scrolling  : 'no',
         loop       : false

    });
});