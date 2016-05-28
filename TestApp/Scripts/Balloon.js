var lastScrollTop = 0;

$(window).scroll(function (event)
{
    var windowBottom = $(window).scrollTop() + $(window).height();
    var windowCenter = windowBottom - $(window).height() / 2;
    var bubbleCenter = $('.circle').offset().top + $('.circle').height();
    
    if (bubbleCenter < windowBottom && bubbleCenter > windowCenter) {
        var st = $(this).scrollTop();
        
        if (st > lastScrollTop) {
            console.log('scroll down');
        } else {
            // upscroll code
            console.log('scroll up');
        }
        lastScrollTop = st;
    }
});