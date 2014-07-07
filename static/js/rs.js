/**
 * Created by nick on 6/22/14.
 */

$(window).scroll(function() {
    if ($(".navbar-default-rs").offset().top > 50) {
        $(".navbar-fixed-top").removeClass("navbar-default-rs-top");
        $(".navbar-fixed-top").addClass("navbar-default-rs-scrolled");
    } else {
        $(".navbar-fixed-top").addClass("navbar-default-rs-top");
        $(".navbar-fixed-top").removeClass("navbar-default-rs-scrolled");
    }
});

$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});