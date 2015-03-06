$(function(){
	$('a.dd-toggle').on('click',function(){
		$('.fieldset').addClass('animated fadeInRightBig').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
			function(){
			$(this).removeClass('animated fadeInRightBig');
		});
	});
});