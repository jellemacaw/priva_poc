//You can use jQuery but keep in mind that javascript is NOT scoped to spec!
//All JS and CSS are global scope!
function mainNav() {
  var mouseOutTimeout;
  var mouseOutTimeoutDuration = 100;

  $('.navigation-main .wrapper > .item').hover(function () {
    const itemId = $(this).attr('data-item-id');
    const dataLayerId = '[data-item-id="' + itemId + '"]';
    clearTimeout(mouseOutTimeout);
    var itemHeight = $(this).outerHeight();
    var submenuTopOffset = Math.round($(this).offset().top + itemHeight);
    var doesBgLayerExist = $('.bg-mask').length;

    if(doesBgLayerExist <= 0) {
      $('.navigation-main').append("<div class='bg-mask'></div>");
    } else {
      $(".bg-mask").show();
    }
    $('.subs-wrapper').removeClass('hover');
    $('.subs-wrapper' + dataLayerId).addClass('hover').css('top',submenuTopOffset);
  }, function () {
    $('.bg-mask').remove();
    mouseOutTimeout = setTimeout(function() {
      $('.subs-wrapper').removeClass('hover');
    }, mouseOutTimeoutDuration);
  });

  $('.subs-wrapper').each(function (index) {
    $(this).remove().clone().appendTo('body');
  });

  $('.subs-wrapper').hover(function () {
    const itemId = $(this).attr('data-item-id');
    const dataLayerId = '[data-item-id="' + itemId + '"]';
    clearTimeout(mouseOutTimeout);
    $(this).addClass('hover');
    $('.navigation-main .wrapper').find('.item' + dataLayerId).addClass('hover');

    var doesBgLayerExist = $('.bg-mask').length;
    if(doesBgLayerExist <= 0) {
      $('.navigation-main').append("<div class='bg-mask'></div>");
    }
  }, function () {
    $('.navigation-main .wrapper > .item').removeClass('hover');
    $('.bg-mask').remove();
    mouseOutTimeout = setTimeout(function() {
      $('.subs-wrapper.hover').removeClass('hover');
    }, mouseOutTimeoutDuration);
  });

} mainNav();

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var targetForScrollClass = 'body';

    if (scroll >= 10) {
      $(targetForScrollClass).addClass('scroll');
    } else {
      $(targetForScrollClass).removeClass('scroll');
    }
  });
