$(document).ready(function(){

	$('#fixedLeonards').on('click',function(){
		$('#fixedLeonards').css({'opacity': '1'});
		$('#fixedMilan,#fixedWavers').css({'opacity': '0.4'});
		$('html,body').animate({
        scrollTop: $("#leonardsSection").offset().top -60},
        1000);

	})

	$('#fixedWavers').on('click',function(){
		$('#fixedWavers').css({'opacity': '1'});
		$('#fixedMilan,#fixedLeonards').css({'opacity': '0.4'});
		$('html,body').animate({
        scrollTop: $("#waversSection").offset().top -60},
        1000);

	})

	$('#fixedMilan').on('click',function(){
		$('#fixedMilan').css({'opacity': '1'});
		$('#fixedLeonards,#fixedWavers').css({'opacity': '0.4'});
		$('html,body').animate({
        scrollTop: $("#milansSection").offset().top -60},
        1000);

	})

$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test =350;
    var milanSection=1000;
    var leonardsSection= 500;
    var waversSection= 1500;

    $('#fixedMilan,#fixedWavers').css({'opacity': '0.4'});

    if(y_scroll_pos > scroll_pos_test) {
	   $("#logo,.customerInfoContainer").addClass('scrollStyle');
	   $('#fixedGlassNav').fadeIn();

			   if(y_scroll_pos>leonardsSection){
					$('#fixedLeonards').css({'opacity': '1'});
					$('#fixedMilan,#fixedWavers').css({'opacity': '0.4'});
					
					if(y_scroll_pos>milanSection){
						$('#fixedMilan').css({'opacity': '1'});
						$('#fixedLeonards,#fixedWavers').css({'opacity': '0.4'});

						if(y_scroll_pos>waversSection){
							$('#fixedWavers').css({'opacity': '1'});
							$('#fixedLeonards,#fixedMilan').css({'opacity': '0.4'});
							}
					}

				}
			else{
				$('#fixedLeonards').css({'opacity': '1'});

			}

    }
	else
	{
		$("#logo,.customerInfoContainer").removeClass('scrollStyle');
		$('#fixedGlassNav').fadeOut(10);
	}

});




});