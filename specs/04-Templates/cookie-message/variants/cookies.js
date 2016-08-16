var cookieHandler = function(){
	var now = new Date();

	now.setMonth( now.getMonth() + 12 );
	document.cookie = 'CC_CONSENT=true;expires=' + now.toUTCString();

	$(".cookies").fadeOut();
}

$(document).ready(function(){
	var cookieName = "CC_CONSENT";
	setTimeout(function(){
		if(typeof document !== 'undefined' && document.cookie.indexOf(cookieName) < 0) {
			$(".cookies").fadeIn();
		}
	},5000);
});
