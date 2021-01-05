$('.about-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.portfolio-slider').slick({
    slidesToShow: 3,
    rows: 2,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]

});
$(window).scroll(function() {
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed-header');
    } else {
        $('header').removeClass('fixed-header');
    }
});
$(document).ready(function() {
    $(".navbar-nav .nav-item").click(function() {
        $(".navbar-nav .nav-item").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");
    });


    var $form = $("form"),
        $successMsg = $(".alert");
    $.validator.addMethod("letters", function(value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
    });
    $form.validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: "Please enter a valid email address",
        },
        submitHandler: function() {
            $successMsg.show();
        }
    });
});

new WOW().init();
$('.navbar-toggler').click(function() {
    $('#overlay').toggleClass('overlay');
});