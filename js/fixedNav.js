$(document).ready(function(){

$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test =350;             

    if(y_scroll_pos > scroll_pos_test) {
	   $("#logo,.customerInfoContainer").addClass('scrollStyle');
	   $('#fixedGlassNav').fadeIn();
    }
	else
	{
		$("#logo,.customerInfoContainer").removeClass('scrollStyle');
		$('#fixedGlassNav').fadeOut(10);
	}
});

});