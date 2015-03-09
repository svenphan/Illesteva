$(document).ready(function(){

	$('.ctaAddBtn').hide();


	$(".callToAction").on({ 
	mouseenter: function () {
		$(this,".callToAction").addClass('hover');
        $('.ctaAddBtn').fadeIn();
        $('.contentCallToAction').hide();
   	},
    mouseleave: function () {
    	$(this,".callToAction").removeClass('hover');
		$('.ctaAddBtn').hide();
		$('.contentCallToAction').show();
    	}
});

});