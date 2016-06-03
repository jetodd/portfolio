$(document).keydown(function(e) {
    var h = $('#hero');
    var p = h.position();

    switch (e.which) {
    case 37:
        var value = p.left - 5 + 'px';
        $('#hero').css('left', value);
        break;
    case 39:
        var value = p.left + 5 + 'px';
        $('#hero').css('left', value);
        break;
    }
    
    var el = document.getElementById("hero");
    var rect = el.getBoundingClientRect();

    if (rect.left + rect.width <= 0 && $('.current').prev('.page').length > 0) {
        var prev = $('.current').next('.page');
    } else if (rect.right - rect.width >= window.innerWidth && $('.current').next('.page').length > 0) {
        var next = $('.current').next('.page');
        var left = next.offset().left;
        
        $('.current').removeClass('current');
        
        $('body').animate({
            scrollLeft: left
        }, function () {
            next.addClass('current');
        });
    }
});

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        
        $('.current').removeClass('current');

        var target = this.hash;
        var $target = $(target);

        $target.addClass('current');

        $('html, body').stop().animate({
            'scrollLeft': $target.offset().left
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$('div.page').first();