var $frame = $('.home-videos .frame__wrap');
var $slidee = $('.home-videos .frame');
var $wrap = $frame.parent();
// Call Sly on frame
$frame.sly({
    horizontal: 1,
    itemNav: 'basic',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBar: $wrap.find('.scrollbar'),
    scrollBy: 1,
    speed: 3000,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
    prevPage: $('.home-videos__prev1'),
    nextPage: $('.home-videos__next1'),
});

var $frame3 = $('.case__slider .frame__wrap');
var $slidee3 = $('.case__slider .frame');
var $wrap3 = $frame3.parent();
// Call Sly on frame
$frame3.sly({
    horizontal: 1,
    itemNav: 'basic',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBar: $wrap3.find('.scrollbar'),
    scrollBy: 1,
    speed: 3000,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
    prevPage: $('.home-portf__prev3'),
    nextPage: $('.home-portf__next3'),
});
var $frame4 = $('.case-gallery .frame__wrap');
var $slidee4 = $('.case-gallery .frame');
var $wrap4 = $frame4.parent();
// Call Sly on frame
$frame4.sly({
    horizontal: 1,
    itemNav: 'basic',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBar: $wrap4.find('.scrollbar'),
    scrollBy: 1,
    speed: 3000,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
    prevPage: $('.home-portf__prev4'),
    nextPage: $('.home-portf__next4'),
});
if ($(window).width() < 768) {
    $frame4.sly(false);
}
var $frame2 = $('.home-portf .frame__wrap');
var $slidee2 = $('.home-portf .frame');
var $wrap2 = $frame2.parent();
// Call Sly on frame
$frame2.sly({
    horizontal: 1,
    itemNav: 'basic',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBar: $wrap2.find('.scrollbar'),
    scrollBy: 1,
    speed: 3000,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
    prevPage: $('.home-portf__prev'),
    nextPage: $('.home-portf__next'),
});
var stopSc = 0;
var prevScroll = 0;
var afterScroll = 0;
// $(window).scroll(function (e) {

//     var target = $(this).scrollTop();

//     if (target > 1000 && afterScroll == 0) {
//         stopSc = 1;
//     } else {



//     }
//     if (stopSc == 1) {
//         disableScroll();

//         if (target > prevScroll) {
//             $frame2.sly('slideBy', target - prevScroll, true);
//         } else {
//             $frame2.sly('prev');
//         }
//     }
//     prevScroll = target;

// });

// $frame2.sly('on', 'change', function (eventName) {
//     if (this.pos.dest == this.pos.end) {
//         stopSc = 0;
//         afterScroll = 1;
//         enableScroll();
//     }
//     console.log(eventName); // 'load'
//     console.log(this.pos.dest == this.pos.end);  // Sly position object
// });


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

(function ($) {
    $(function () {

        $('.contacts__tabs').on('click', 'button:not(.active)', function (e) {
            e.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.contacts').find('.contacts__block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
$('.header__call, .header-mob__call').on('click', function (e) {
    e.preventDefault();
    $('.overlay-call').addClass('overlay-active');
    $('body').css("overflow", "hidden");
});
$('.main__video, .home-videos__block, .case .home-portf__block').on('click', function (e) {
    e.preventDefault();
    $('.overlay-video').addClass('overlay-active');
    $('body').css("overflow", "hidden");
});
$('.header-mob__menu').on('click', function (e) {
    e.preventDefault();
    $('.mob-menu').addClass('active');
    $('body').css("overflow", "hidden");
});
$('.mob-menu__close').on('click', function (e) {
    e.preventDefault();
    $('.mob-menu').removeClass('active');
    $('body').css("overflow", "visible");
});


$('.overlay-call').on('click', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('body').css("overflow", "visible");
        $('.overlay-call').removeClass('overlay-active');
    }
});
$('.overlay-video').on('click', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('body').css("overflow", "visible");
        $('.overlay-video').removeClass('overlay-active');
        $('.overlay-video').find('iframe').attr('src', $('.overlay-video').find('iframe').attr('src'));
    }
});
$('.popup-close').on('click', function (e) {
    $('body').css("overflow", "visible");
    $(this).closest('.overlay').removeClass('overlay-active');
    $('.overlay-video').find('iframe').attr('src', $('.overlay-video').find('iframe').attr('src'));
});
$(window).scroll(function () {

    var target = $(this).scrollTop();

    if (target > 300) {

        $('.swim').addClass('active');
    } else {
        $('.swim').removeClass('active');

    }

});