//You can use jQuery but keep in mind that javascript is NOT scoped to spec!
//All JS and CSS are global scope!

$('.navigation-main .wrapper > .item').hover(function () {

  $('.navigation-main').append("<div class='bg-mask'></div>");
  $('.subs-wrapper').addClass('hover');
}, function () {

  $('.bg-mask').remove();
  $('.subs-wrapper').removeClass('hover');
});
