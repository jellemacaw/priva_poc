var layerHandler = function(event) {

  event.preventDefault();

  var dataTarget = $(event.target);
  var dataId = dataTarget.is("[data-layer-id]") ? dataTarget.attr("data-layer-id") : dataTarget.closest("[data-layer-id]").attr("data-layer-id");
  var dataLayerId = '[data-layer-id="' + dataId + '"]';
  var layerId = '#' + dataId;
  var parentLayer = $(layerId).parents(".layer");

  var itemHeight = $(dataLayerId).outerHeight() + 10;
  var layerHasIframe = false; // $(layerId + " " + "iframe").length > 0;
  var iframeHeight = $(layerId).find('iframe').prop("height");
  var iframeWidth = $(layerId).find('iframe').prop("width");

  // what?
  if(layerHasIframe) {
    const iframe = $(layerId).find('iframe');
    const iframeSrc = iframe.prop('src');
    const iframeSrcClone = iframeSrc + "__stop";

    if ($(layerId).is(':visible')) {
      iframe.prop('src', iframeSrcClone);
      iframe.prop('src', iframeSrc);

    } else {
      $(layerId).remove().clone().appendTo('body');
      $(layerId).find('.layer__inner').css({
        "height": iframeHeight,
        "width":iframeWidth
      });
    }
  }

  // hide a popup
  if ($(layerId).is(':visible')) {
    $(layerId).hide().removeClass('is-shown').addClass('is-hidden');
    $(dataLayerId).removeClass('open').find('.i-arrow').toggleClass('up down');

    // pause the video when the popup is hidden
    if ($(layerId).find('iframe')[0]) {
      $(layerId).find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }

    // to avoid nested popups (coutrnyselector mobile...) removing the background fade
    // only a top level popup can remove the bg
    if ( parentLayer.length == 0 ) {
      $('.bg-mask').remove();
    }

  // open a popup
  } else {
    // to avoid nested popups (coutrnyselector mobile...) cfreating a second background fade
    // only a top level popup can remove the bg
    if ( $(".bg-mask.lightbox").length == 0 ) {
      $('body').append("<div class='bg-mask lightbox'></div>");
    }
    // append to bottom of page, except for navigation menus
    if ( !$(layerId).is(".layer--inline") ) {
      $(layerId).appendTo("body")
    }
    // show stuff and set states
    $(layerId)
      .show()
      .removeClass('is-hidden')
      .addClass('is-shown')
      .css("display", "block");
    $(dataLayerId).addClass('open').find('.i-arrow').toggleClass('up down');

    // scroll a nested layer into view
    if ( parentLayer.length != 0 ) {
      parentLayer.animate({
          scrollTop: $(layerId).position().top - 76
      }, 250);
    }
  }


  $(document).keyup(function (e) {
    if (e.keyCode == 27) {

      $(layerId)
        .hide()
        .removeClass('is-shown')
        .addClass('is-hidden');

      $(dataLayerId)
        .removeClass('open')
        .find('.i-arrow')
          .toggleClass('up down');

      $('.bg-mask').remove();
    }
  });
};
