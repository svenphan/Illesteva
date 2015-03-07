$(document).ready(function(){

	document.querySelector( "#nav-toggle" )
	  .addEventListener( "click", function() {
	    this.classList.toggle( "active" );
	  });

        $('body').animate({
            left:'285px'
        },200);
    
});
