(function ($) {

    "use strict";

    // Preloader
    $(window).on('load', function () {
        $('.preloader-wave-effect').fadeOut();
        $('.preloader-text').fadeOut();
        $('#preloader-wrapper').delay(200).fadeOut('slow');
    });

    setTimeout(() => {

        // Scrollspy
        $('body').scrollspy({
            target: '#navbarContent'
        });

        // Scroll to section
        $('[data-scroll], .scroll').on('click', function (e) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1250, 'easeInOutExpo');
            e.preventDefault();
        });

        // Adds background color to navbar on click hamburger menu icon
        const navbar = document.querySelector('.navbar');
        $(".navbar-toggler").on("click", function () {
            if ($(navbar).hasClass("bg")) {
                $(navbar).removeClass("bg");
            } else {
                $(navbar).addClass("bg")
            }
        });

        // On scroll nav menu hide + add/remove 'scrolled' and 'bg' class
        $(window).on('scroll', function () {
            $('.navbar-collapse').collapse('hide');
            $(window).scrollTop() >= 80 ? $(navbar).addClass("scrolled bg") : $(navbar).removeClass("scrolled bg");
        });


    }, 3000);

    // AOS
    AOS.init({
        // Global settings:
        disable: false,
        offset: 120,
        delay: 0,
        duration: 600,
        easing: 'ease',
        once: true
    });


})(jQuery);