$(document).ready(function(){
	var myNavBar = {
	    flagAdd: true,
	    elements: [],
	    init: function (elements) {
	        this.elements = elements;
	    },
	    add : function() {
	        if(this.flagAdd) {
	            for(var i=0; i < this.elements.length; i++) {
	                document.getElementById(this.elements[i]).className += " fixed-theme";
	            }
	            this.flagAdd = false;
	        }
	    },
	    remove: function() {
	        for(var i=0; i < this.elements.length; i++) {
	            document.getElementById(this.elements[i]).className =
	                    document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
	        }
	        this.flagAdd = true;
	    }
	};
	myNavBar.init(  [
	    "header"
	]);
	function offSetManager(){
	    var yOffset = 0;
	    var currYOffSet = window.pageYOffset;

	    if(yOffset < currYOffSet) {
	        myNavBar.add();
	    }
	    else if(currYOffSet == yOffset){
	        myNavBar.remove();
	    }
	}
	window.onscroll = function(e) {
	    offSetManager();
	}
	offSetManager();

	$(".mob-btn").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $(".nav-layout, .header-nav").toggle($(this).hasClass("active"));
    });

    $('.nav-layout').click(function() {
        $(".mob-btn").removeClass("active");
        $(".nav-layout, .header-nav").hide('fast');
    });
    $('#navbar').onePageNav({
		currentClass: 'active',
		changeHash: true,
		scrollSpeed: 750
	});

    // $('a[href*=#]:not([href=#])').click(function () {
    //     if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             $('html,body').animate({
    //                 scrollTop: target.offset().top
    //             }, 2000);
    //             return false;
    //         }
    //     }
    // });
});