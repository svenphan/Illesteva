// For an explanation of the basics of jquery, please see hamburger.js
$(document).ready( function() {

	/*
		Here we are running a function when a.dd-toggle is clicked
	*/
	$(".dd-toggle").click( function(e) { 
		
		// preventDefault lets us prevent the <a> tag from linking through
		e.preventDefault();
		if ( $(this).next("ul").hasClass("dd-shown") ) {
			/*
				!! This is the case if our drop-down is already shown.

				Just like before, we are selecting the next ul after the 
				a.dd-toggle that was clicked on, and removing the class of
				.dd-shown, and adding the class of .dd-hidden
			*/
			$(this).next("ul").removeClass("dd-shown").addClass("dd-hidden");
		} 
		// Else means that this is the case if our drop-down is not shown
		else {
			// As a result, we do the reverse of what is listed above.
			$(this).next("ul").removeClass("dd-hidden").addClass("dd-shown");
		}
	});





});