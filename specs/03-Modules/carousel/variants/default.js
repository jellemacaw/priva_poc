$('document').ready(function () {
  setTimeout(function () {

    $('.carousel').each(function (index) {
		carouselHandler($(this).attr('id'));
    });

  }, 500);
});

var carouselHandler = function (carouselId) {

  var carouselItemId = $('#' + carouselId);
  var carouselConfig = false;

  if ( carouselItemId.is(".carousel--1-2-4") ) {    carouselConfig = "productlist"; }
  if ( carouselItemId.is(".carousel--assets") ) {     carouselConfig = "assets"; }

  switch (carouselConfig) {
    case "productlist":

      $(carouselItemId).slick({
        infinite: false,
        autoplay: false,
        dots:true,
        dotsClass:'numSlides',
        fade: false,
        respondTo:'slider',
        speed: 600,
        lazyLoad:'ondemand',
        prevArrow:'<button class="carousel-nav prev fa fa-long-arrow-left" aria-hidden="true"></button>',
        nextArrow:'<button class="carousel-nav next fa fa-long-arrow-right" aria-hidden="true"></button>',
        focusOnSelect: true,
        waitForAnimate:false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            // max-width:
            breakpoint: 658,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      });

    break;
    case "assets":

      $(carouselItemId).slick({
        infinite: true,
        autoplay: false,
        dots:true,
        dotsClass:'numSlides',
        fade: false,
        respondTo:'slider',
        speed: 600,
        lazyLoad:'ondemand',
        prevArrow:'<button class="carousel-nav prev fa fa-long-arrow-left" aria-hidden="true"></button>',
        nextArrow:'<button class="carousel-nav next fa fa-long-arrow-right" aria-hidden="true"></button>',
        focusOnSelect: true,
        waitForAnimate:false
      });

    break;
    default:

      $(carouselItemId).slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed:6000,
        dots:true,
        dotsClass:'numSlides',
        fade:true,
        respondTo:'slider',
        speed:1000,
        lazyLoad:'ondemand',
        prevArrow:'<button class="carousel-nav prev fa fa-long-arrow-left" aria-hidden="true"></button>',
        nextArrow:'<button class="carousel-nav next fa fa-long-arrow-right" aria-hidden="true"></button>',
        focusOnSelect: true,
        waitForAnimate:false
      });
  }
};
