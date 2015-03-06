$(document).ready(function(){
	$('.seeMoreBtn,#modalBG,#reviewSection,#clearGlasses').hide();
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
	$('.eyeGlassContainer').hide();
	$('#reviewSection').show();

});

$('.closeBtn').on('click',function(){
	$('#modalBG').hide();
	$('body').css({'overflow': 'scroll','height': '100%'});
	$('#leftContent,.closeBtn').removeClass('comments');
	$('#reviewSection').hide();
	$('.eyeGlassContainer').show();
})

$('#viewProduct').on('click',function(){
	$('#leftContent').removeClass('comments');
	$('#leftContent').addClass('productView');
	$('.closeBtn').removeClass('comments')
	$('.eyeGlassContainer').show();
	$('#reviewSection').hide();
});

$('#grey').on('click',function(){
	$('#grey').css({'border': '3px solid black'});
	$('#blue').css({'border': '0px'});
	$('#blueGlasses').hide();
	$('#clearGlasses').fadeIn();
});

$('#blue').on('click',function(){
	$('#blue').css({'border': '3px solid black'});
	$('#grey').css({'border': '0px'});
	$('#clearGlasses').hide();
	$('#blueGlasses').fadeIn();
});
});