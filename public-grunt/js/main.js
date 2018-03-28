var owlNav;


///// SLIDER ///////////

$(document).ready(function() {

    owlNav = $(".slider_head").owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.rightNavArrow i').click(function() {
        owlNav.trigger('next.owl.carousel');
    });

    $('.leftNavArrow i').on('click', function() {
        owlNav.trigger('prev.owl.carousel');
    });

    var collectionSlider = $(".collectionSliderWrapper").owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            },
            992: {
                items: 4
            },

        }
    });

    $('.collectionSlider .navArrow.rightArrow').click(function() {
        collectionSlider.trigger('next.owl.carousel');
    });

    $('.collectionSlider .navArrow.leftArrow').on('click', function() {
        collectionSlider.trigger('prev.owl.carousel');
    });

    var modelsSlider = $(".modelsSliderWrapperInner").owlCarousel({
        loop: false,
        margin: 20,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            500: {
                items: 4
            },
            772:{
                items: 6
            }
        }
    });

    $('.modelsSliderWrapper .navArrow.rightArrow').click(function() {
        modelsSlider.trigger('next.owl.carousel');
    });

    $('.modelsSliderWrapper .navArrow.leftArrow').on('click', function() {
        modelsSlider.trigger('prev.owl.carousel');
    });

    var allCollectionsSlider = $(".allCollectionsSliderWrapper").owlCarousel({
        loop: false,
        margin: 0,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            772: {
                items: 4
            },
            1170:{
                items: 6
            }
        }
    });

    // $('.modelsSliderWrapper .navArrow.rightArrow').click(function() {
    //     modelsSlider.trigger('next.owl.carousel');
    // });
    //
    // $('.modelsSliderWrapper .navArrow.leftArrow').on('click', function() {
    //     modelsSlider.trigger('prev.owl.carousel');
    // });


    /////////////// MENU //////////////////

    $('.designButton').on('click', function() {
        $('.designWrapper').slideToggle();
        $('.durabilityButton').toggleClass('inactive');
        $('.safetyButton').toggleClass('inactive');
        $(this).toggleClass('rotateArrow');
    });

    $('.durabilityButton').on('click', function() {
        $('.durabilityWrapper').slideToggle();
        $('.designButton').toggleClass('inactive');
        $('.safetyButton').toggleClass('inactive');
        $(this).toggleClass('rotateArrow');
    });

    $('.safetyButton').on('click', function() {
        $('.safetyWrapper').slideToggle();
        $('.durabilityButton').toggleClass('inactive');
        $('.designButton').toggleClass('inactive');
        $(this).toggleClass('rotateArrow');
    });


    /////////////// KARTY ////////////////

    $('.productsWrapperInner').flip({
        trigger: 'manual',
        forceWidth: true,
        forceHeight: false
    });

    $(".turnProduct").on('click', function() {
        $('.productsWrapperInner').flip('toggle');
    });


    ///////// PROMOCJA /////////////

    $('.promotionBar').on('click', function() {
        $('.promotionInner').slideToggle();
        $('.plus').toggleClass('rotated');
    });



});
