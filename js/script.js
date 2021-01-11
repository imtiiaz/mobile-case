$(function () {


    //menu

    $('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');

    $("#menu-icon").on("click", function () {
        $("nav").slideToggle();
        $(this).toggleClass("active");
    });


    // Smooth Scroll

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

    //        Banner slider

    $('.banner_slider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        nav: false,
        speed: 1500,
        autoplaySpeed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // Product Slider

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre_arrow"></i>',
        centerMode: false,
        focusOnSelect: false
    });



    // Best Selling slick slider

    $('.best_selling_slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        nav: false,
        speed: 1000,
        autoplaySpeed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }

  ]
    });


    // related_slider slick slider

    $('.related_slider').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        nav: false,
        speed: 700,
        autoplaySpeed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre_arrow"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });



    // recommend slick slider

    $('.recommend_slider').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        nav: false,
        speed: 1000,
        autoplaySpeed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre_arrow"></i>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
 },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }

  ]
    });

    // scroll top 

    $(".scroll_top").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 800);
    });
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $(".scroll_top").fadeIn();
        } else {
            $(".scroll_top").fadeOut();
        }
    });

    $(document).ready(function () {
        $(".righ_0").click(function () {
            $("#collapsetwo").toggle("show");
        })
    })
    
    // custom

    let customBtn = document.getElementById('custom_btn')
    customBtn.addEventListener('click', function () {
        let customInput = document.getElementById('custom_input')
        customInput.style.display = 'block'
    })


    // Wow js

    new WOW().init();

});
