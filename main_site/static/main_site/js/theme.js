/*-----------------------------------------------------------------------------------
    Template Name: Fioxen - Directory & Listings HTML Template
    Template URI: site.com
    Description: Fioxen - Directory & Listings HTML Template
    Author: WebTend 
    Author URI: https://webtend.net/
    Version: 1.0

    Note: This is Main Js file
-----------------------------------------------------------------------------------
    Js INDEX
    ===================
    ## Main Menu
    ## Panel Widget
    ## Prealoder
    ## Sticky
    ## Back to top
    ## Counter
    ## WOW
    ## Magnific-popup
    ## Nice select
    ## Slick Slider
-----------------------------------------------------------------------------------*/

(function($) {
    'use strict';

    //===== Main Menu
    function mainMenu() {
        // Variables
        var var_window = $(window),
            navContainer = $('.header-navigation'),
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            navMenuLi = $('.nav-menu ul li ul li'),
            closeIcon = $('.navbar-close');
        // navbar toggler
        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });
        // close icon
        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });
        // adds toggle button to li items that have children
        navMenu.find('li a').each(function() {
            if ($(this).next().length > 0) {
                $(this).parent('li').append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>');
            }
        });
        // expands the dropdown menu on each click
        navMenu.find('li .dd-trigger').on('click', function(e) {
            e.preventDefault();
            $(this).parent('li').children('ul').stop(true, true).slideToggle(350);
            $(this).parent('li').toggleClass('active');
        });
        // check browser width in real-time
        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= 1199) {
                navContainer.addClass('breakpoint-on');
            } else {
                navContainer.removeClass('breakpoint-on');
            }
        }
        breakpointCheck();
        var_window.on('resize', function() {
            breakpointCheck();
        });
    };
    // Document Ready
    $(document).ready(function() {
        mainMenu();
    });

    //===== Prealoder
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut('500');
    })

    //===== Sticky
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".header-navigation").removeClass("sticky");
        } else {
            $(".header-navigation").addClass("sticky");
        }
    });

    //===== Back to top
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //===== Counter js
    $('.count').counterUp({
        delay: 100,
        time: 4000
    });

    //===== Magnific-popup js
    $('.video-popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    $(".img-popup").magnificPopup({
        type: "image",
         gallery: { 
          enabled: true 
        }
    });
    //===== Nice select js
    $('select').niceSelect();

    
    //===== Slick slider js
    $('.hero-slider-one').slick({
		dots: true,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: false,
        vertical: true,
        verticalSwiping: true,
		slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: false
                }
            }
        ]
    });
    var sliderArrows = $('.hero-arrows');
    $('.hero-slider-two').slick({
		dots: false,
		arrows: true,
        infinite: true,
        fade: true,
		autoplaySpeed: 1500,
        appendArrows: sliderArrows,
        autoplay: false,
		slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="fas fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="fas fa-angle-right"></i></div>'
    });
    $('.hero-slider-three').slick({
		dots: false,
		arrows: false,
        infinite: true,
        fade: true,
		autoplaySpeed: 1500,
        autoplay: false,
		slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="fas fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="fas fa-angle-right"></i></div>'
    });
    $('.portfolio-slider-one').slick({
		dots: true,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: false,
		slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.portfolio-slider-two').slick({
		dots: true,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: false,
		slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.portfolio-slider-three').slick({
		dots: true,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: false,
		slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    var sliderArrows = $('.service-arrows');
    $('.service-slider-one').slick({
		dots: false,
		arrows: true,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: false,
        appendArrows: sliderArrows,
		slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="fas fa-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="fas fa-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.testimonial-slider-one').slick({
		dots: false,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: false,
		slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.testimonial-slider-two').slick({
		dots: false,
		arrows: true,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: false,
		slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    var sliderArrows = $('.testimonial-arrows');
    $('.testimonial-slider-three').slick({
		dots: false,
		arrows: true,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: false,
        appendArrows: sliderArrows,
		slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="fas fa-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="fas fa-arrow-right"></i></div>'
    });
    $('.testimonial-slider-four').slick({
		dots: false,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: false,
        vertical: true,
        verticalSwiping: true,
		slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="fas fa-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="fas fa-arrow-right"></i></div>'
    });
    $('.clients-slider-one').slick({
		dots: false,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: false,
		slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.clients-slider-two').slick({
		dots: false,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: false,
		slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.clients-slider-three').slick({
		dots: false,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: false,
		slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.history-content-slider').slick({
		dots: true,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: false,
		slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>'
    });
    $('.releted-products-slider').slick({
		dots: false,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: false,
		slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.recent-portfolio-slider').slick({
		dots: false,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: false,
		slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.product-big-slider').slick({
		dots: false,
		arrows: false,
		autoplaySpeed: 1500,
        autoplay: false,
        fade: true,
        asNavFor: '.product-thumb-slider',
		slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>'
    });
    $('.product-thumb-slider').slick({
		dots: false,
		arrows: false,
		autoplaySpeed: 1500,
        autoplay: false,
        asNavFor: '.product-big-slider',
        focusOnSelect: true,
		slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>'
    });
    $('.screenshot-slider').slick({
		dots: false,
		arrows: true,
		autoplaySpeed: 1500,
        autoplay: false,
		slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>'
    });
    //===== Quantity Number js
    $('.quantity-down').on('click', function(){
        var numProduct = Number($(this).next().val());
        if(numProduct > 0) $(this).next().val(numProduct - 1);
    });
    $('.quantity-up').on('click', function(){
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });

    //====== Isotope js
    $('#filter-project').imagesLoaded( function() {
        // items on button click
        $('.filter-btn').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // menu active class
        $('.filter-btn li').on('click', function (e) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        var $grid = $('.project-row').isotope({
            itemSelector: '.project-column',
            layoutMode: 'fitRows'
        });
    });
    $('#masonry-portfolio').imagesLoaded( function() {
        // items on button click
        $('.filter-btn').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // menu active class
        $('.filter-btn li').on('click', function (e) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        var $grid = $('.masonry-row').isotope({
            itemSelector: '.portfolio-column',
            percentPosition: true,
            masonry: {
                columnWidth: 1
            }
        });
    });
    //===== Nice number js
    $('input[type="number"]').niceNumber(); 

    //======= Price ranger
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 4000,
        values: [ 400, 3500 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );

})(window.jQuery);