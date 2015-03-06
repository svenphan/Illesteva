$(document).ready(function(){

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

});