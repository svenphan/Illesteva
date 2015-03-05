$(document).ready(function(){
	$('#productModal,.seeMoreBtn').hide();
	$('#leonards').on('click',function(){
		$('#productModal').show();
	})

	
$(".styleContainers").on({
    mouseenter: function () {
        $('.seeMoreBtn').fadeIn("slow");
    	},
    mouseleave: function () {
    	$('.seeMoreBtn').hide();
        
    	}
	});

$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 20;             

    if(y_scroll_pos > scroll_pos_test) {
	   $("#logo,.customerInfoContainer,#fixedGlassNav").addClass('scrollStyle');
    }
	else
	{
		$("#logo,.customerInfoContainer,#fixedGlassNav").removeClass('scrollStyle');
	}
});

$('.seeMoreBtn').on('click',function(){
	 $('html,body').animate({
        scrollTop: $(".Leonards").offset().top -60},
        1000);
});

});