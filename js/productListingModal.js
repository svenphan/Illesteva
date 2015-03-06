$(document).ready(function(){
	$('.seeMoreBtn,#modalBG').hide();
	$('#leonards').on('click',function(){
		$('#modalBG').show();
		$('body').css({'overflow': 'hidden','height': '100%'});
	});

	
$(".styleContainers").on({
    mouseenter: function () {
        $('.seeMoreBtn').fadeIn("slow");
    	},
    mouseleave: function () {
    	$('.seeMoreBtn').hide();
        
    	}
	});

$('.seeMoreBtn').on('click',function(){
	 $('html,body').animate({
        scrollTop: $(".Leonards").offset().top -60},
        1000);
});

$('#comments').on('click',function(){
	$('#leftContent').addClass('comments');
	$('.closeBtn').addClass('comments')
});

$('.closeBtn').on('click',function(){
	$('#modalBG').hide();
	$('body').css({'overflow': 'scroll','height': '100%'});
	$('#leftContent,.closeBtn').removeClass('comments');
})

});