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

    $('.rightNavArrow img').click(function() {
        owlNav.trigger('next.owl.carousel');
    });

    $('.leftNavArrow img').on('click', function() {
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

    $('.collectionSlider .navArrow.rightArrow img').click(function() {
        collectionSlider.trigger('next.owl.carousel');
    });

    $('.collectionSlider .navArrow.leftArrow img').on('click', function() {
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

    var allCollectionsSlider = $(".allCollectionsSliderWrapperInner").owlCarousel({
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

    $('.allCollectionsSliderWrapper .navArrow.rightArrow .arrow').click(function() {
        allCollectionsSlider.trigger('next.owl.carousel');
    });

    $('.allCollectionsSliderWrapper .navArrow.leftArrow .arrow').on('click', function() {
        allCollectionsSlider.trigger('prev.owl.carousel');
    });

    var recomendedCollectionWrapper = $(".recomendedCollectionWrapperInner").owlCarousel({
        loop: false,
        margin: 20,
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
                items: 3
            }
        }
    });

    $('.recomendedCollectionWrapper .navArrow.rightArrow').click(function() {
        recomendedCollectionWrapper.trigger('next.owl.carousel');
    });

    $('.recomendedCollectionWrapper .navArrow.leftArrow').on('click', function() {
        recomendedCollectionWrapper.trigger('prev.owl.carousel');
    });


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


    ////////// LOGO ///////////

    var headerHeight = $('header').outerHeight();

    $(window).scroll(function () {
    if ($(window).scrollTop() > headerHeight) {
      $('.topCollectionsLogo').addClass('resized');
    }
    else{
      $('.topCollectionsLogo').removeClass('resized');
    }
    });


    ///// DOOR ZOOM /////

    $('.Up').find("span").on('click', function(){
      $('.upWrapper').addClass("active");
    });

    $('.closeUpWrapper').on('click', function(){
      $('.upWrapper').removeClass("active");
    });
//
    $('.Down').find("span").on('click', function(){
      $('.downWrapper').addClass("active");
    });

    $('.closeDownWrapper').on('click', function(){
      $('.downWrapper').removeClass("active");
    });
//
    $('.Left').find("span").on('click', function(){
      $('.leftWrapper').addClass("active");
    });

    $('.closeLeftWrapper').on('click', function(){
      $('.leftWrapper').removeClass("active");
    });

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'disableScrolling': false,
      'alwaysShowNavOnTouchDevices': true,
      'fitImagesInViewport': true
    })



});
