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

	$('[class^="questionEl"]').on('click', function(e){
	    e.preventDefault();
	    var numb = this.className.replace('questionEl-', '');
	    var num = parseInt(numb);
	    $('[class^="questionEl"]').removeClass('active');
	    $(this).addClass('active');
	    $('[id^="questionEl-"]').hide();
	    $('#questionEl-' + num).show();
	});

	$('[class^="answerEl"]').on('click', function(e){
	    e.preventDefault();
	    var numb = this.className.replace('answerEl-', '');
	    var num = parseInt(numb);
	    $('[class^="answerEl"]').removeClass('active');
	    $(this).addClass('active');
	    $('[id^="answerEl-"]').hide();
	    $('#answerEl-' + num).show();
	});

	$('.accordion1').find('.ac-t1').click(function() {
		$(this).next().slideToggle('600');
		$(".ac-c1").not($(this).next()).slideUp('600');
	});
	$('.ac-t1').on('click', function() {
		$(this).toggleClass('active').siblings().removeClass('active');
	});
	$('.accordion2').find('.ac-t2').click(function() {
		$(this).next().slideToggle('600');
		$(".ac-c2").not($(this).next()).slideUp('600');
	});
	$('.ac-t2').on('click', function() {
		$(this).toggleClass('active').siblings().removeClass('active');
	});
});