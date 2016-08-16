function fullStory() {
  $('.full-story__control .btn').on('click', function () {
    var fullstoryContainer = $(this).closest('.full-story'),
        storyContainer = fullstoryContainer.find('.body-content'),
        storyHeight = storyContainer.find('.body-content__inner').innerHeight();

    storyContainer.css('height', storyHeight);

    setTimeout(function () {
      fullstoryContainer.removeClass('is-collapsed');
      storyContainer.css('height', 'auto');
    }, 350);
  });
}fullStory();
