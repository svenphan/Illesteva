$(document).ready(function(){

	$('.ctaAddBtn').hide();


	$(".callToAction").on({ 
	mouseenter: function () {
		$(".callToAction").addClass('hover');
        $('.ctaAddBtn').fadeIn();
        $('.contentCallToAction').hide();
   	},
    mouseleave: function () {
    	$(".callToAction").removeClass('hover');
		$('.ctaAddBtn').hide();
		$('.contentCallToAction').show();
    	}
});

});