$(document).ready(function(){
	$('.seeMoreBtn,#modalBG').hide();
	$('#leonards').on('click',function(){
		$('#modalBG').show();
		$('body').css({'overflow': 'hidden','height': '100%'});
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
    var scroll_pos_test =350;             

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