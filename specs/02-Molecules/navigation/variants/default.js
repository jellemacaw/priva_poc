//You can use jQuery but keep in mind that javascript is NOT scoped to spec!
//All JS and CSS are global scope!

$('.navigation-top .wrapper > .item').hover(function () {
  $('.navigation-top').append("<div class='bg-mask'></div>");
  $('.subs-wrapper').addClass('hover').animate({
    height: '100%',
  });
}, function () {

  $('.bg-mask').remove();
  $('.subs-wrapper').removeClass('hover').css({
    height: '0',
  });
});
