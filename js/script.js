$(document).ready(function () {
    $("#page-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 700) {
                $('#page-top').fadeIn();
            } else {
                $('#page-top').fadeOut();
            }
        });

        $('#page-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
});

(function ($) {
    var $nav = $('#navArea');
    var $btn = $('.toggle_btn');
    var $mask = $('#mask');
    var $link = $('.sp-link')
    var open = 'open'; // class
    // menu open close
    $btn.on('click', function () {
        if (!$nav.hasClass(open)) {
            $nav.addClass(open);
        } else {
            $nav.removeClass(open);
        }
    });
    // mask close
    $mask.on('click', function () {
        $nav.removeClass(open);
    });
    $link.on('click', function () {
        $nav.removeClass(open);
    });
})(jQuery);