$(document).ready(function(){
$('.mobileProductNav').hide();

	document.querySelector( "#nav-toggle" )
	  .addEventListener( "click", function() {
	    this.classList.toggle( "active" );
	  })
    
   $('#nav-toggle').on('click',function(){
   	 $('.mobileProductNav').toggle(100);
   })
});