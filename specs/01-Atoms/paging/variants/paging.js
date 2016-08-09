var getPage = function() {

  if (event) 
  { 
  
	event.preventDefault(); 
	
	var clickObj = $(event.target),
		linkObj = clickObj.is("[href]") ? clickObj : clickObj.closest("a"),
		url = linkObj.attr('href'),
		id = linkObj.closest('.paging-container').attr('id'),
		target = '#' + id;

	// load the html page and select the right fragment
	$(target).load(url + " " + target, function() {
		// replace the original container by moving it's contents and deleting it
		$(target)
		  .children()
			.appendTo($(target).parent());
		$(target).remove();

		// set the browser history state
		if (history.pushState) {
		  history.pushState(null, null, url);
		}
	                  
	});
  }
 
  return false;
}
