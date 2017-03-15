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

    $('select').each(function () {
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;
        $this.addClass('s-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="styledSelect"></div>');
        var $styledSelect = $this.next('div.styledSelect');
        $styledSelect.text($this.children('option').eq(0).text());
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
        var $listItems = $list.children('li');
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.styledSelect.active').each(function () {
                $(this).removeClass('active').next('ul.options').hide();
            });
            $(this).toggleClass('active').next('ul.options').toggle();
        });
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $styledSelect.addClass("checked");
            $this.val($(this).attr('rel'));
            //for (var i = 0; i < numberOfOptions; i++) {
              //  $this.children('option').eq(i).replace('selected="selected"', '');
            //}
            $list.hide();
        });
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });

    $(function () {
      $('#data-form').parsley()
        .on('field:validated', function() {
            var ok = $('.parsley-error').length === 0;
            $('.bs-callout-warning').toggleClass('hidden', ok);
        })
        .on('form:submit', function() {
            return true; // Don't submit form for this demo
        });
    });
});