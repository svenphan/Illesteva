$(document).ready(function(){
	$('#leonardsStory').css({'opacity':'1'});
	$('.seeMoreBtn,#modalBG,#reviewSection,#clearGlasses').hide();
	$('#leonards').on('click',function(){
		$('#modalBG').show();
		$('body').css({'overflow': 'hidden','height': '100%'});
	});

	
$("#Leonards").on({
    mouseenter: function () {
        $('#leonardBtn').fadeIn("slow");
    	},
    mouseleave: function () {
    	$('#leonardBtn').hide();
        
    	}
	});

$("#Milan").on({
    mouseenter: function () {
        $('#milanBtn').fadeIn("slow");
    	},
    mouseleave: function () {
    	$('#milanBtn').hide();
        
    	}
	});


$("#Wavers").on({
    mouseenter: function () {
        $('#waversBtn').fadeIn("slow");
    	},
    mouseleave: function () {
    	$('#waversBtn').hide();
        
    	}
	});

$('#leonardBtn').on('click',function(){
	 $('html,body').animate({
        scrollTop: $("#leonardsSection").offset().top -60},
        1000);
});
$('#milanBtn').on('click',function(){
	 $('html,body').animate({
        scrollTop: $("#milansSection").offset().top -60},
        1000);
});
$('#waversBtn').on('click',function(){
	 $('html,body').animate({
        scrollTop: $("#Wavers").offset().top -60},
        1000);
});

// $('#comments').on('click',function(){
// 	$('#leftContent').addClass('comments');
// 	$('.closeBtn').addClass('comments')
// 	$('.eyeGlassContainer').hide();
// 	$('#reviewSection').show();

// });

$("#comments").click(function() {
	$('#leftContent').addClass('comments');
	$('.closeBtn').addClass('comments')
	$('.eyeGlassContainer').hide();
	$('#reviewSection').show();
	$('#glassStoryShots').fadeOut();
	$('#storyBackground').css({'width': '100%'});
	$("#storyBackground").fadeTo(0.6,0.10, function() {
	      $("#storyBackground").attr("src","img/modal/andrewmarc.png");
	  }).fadeTo(1000,1);
	  return false;
});

$("#viewProduct").click(function() {
	$('#leftContent').removeClass('comments');
	$('#leftContent').addClass('productView');
	$('.closeBtn').removeClass('comments')
	$('.eyeGlassContainer').show();
	$('#reviewSection').hide();
	$('#glassStoryShots').fadeIn();
	$('#storyBackground').css({'width': '100%'});
	$("#storyBackground").fadeTo(0.6,0.10, function() {
	      $("#storyBackground").attr("src","img/modal/mensLeonards1_2.jpg");
	  }).fadeTo(1000,1);
	  return false;
});


$('.closeBtn').on('click',function(){
	$('#modalBG').hide();
	$('body').css({'overflow': 'scroll','height': '100%'});
	$('#leftContent,.closeBtn').removeClass('comments');
	$('#reviewSection').hide();
	$('.eyeGlassContainer').show();
	$('#glassStoryShots').fadeIn();
	$('#storyBackground').css({'width': '93%'});
	$("#storyBackground").fadeTo(0.6,0.10, function() {
	      $("#storyBackground").attr("src","img/modal/mensLeonards1_2.jpg");
	  }).fadeTo(1000,1);
	  return false;
})

// $('#viewProduct').on('click',function(){
// 	$('#leftContent').removeClass('comments');
// 	$('#leftContent').addClass('productView');
// 	$('.closeBtn').removeClass('comments')
// 	$('.eyeGlassContainer').show();
// 	$('#reviewSection').hide();
// });

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

//right side column story shots interaction

// $('#leonardsTwoStory').on('click',function(){
// 	$('#leonardsTwoStory').css({'opacity':'1'});
// 	$('#leonardsThreeStory,#leonardsStory').css({'opacity':'0.5'});
// 	$("#storyBackground").attr("src","img/modal/Leonards2.jpg");

// })


// $('#leonardsStory').on('click',function(){
// 	$('#leonardsStory').css({'opacity':'1'});
// 	$('#leonardsThreeStory,#leonardsTwoStory').css({'opacity':'0.5'});
// 	$("#storyBackground").attr("src","img/modal/mensLeonards1_2.jpg");

// })


// $('#leonardsThreeStory').on('click',function(){
// 	$('#leonardsThreeStory').css({'opacity':'1'});
// 	$('#leonardsTwoStory,#leonardsStory').css({'opacity':'0.5'});
// 	$("#storyBackground").attr("src","img/modal/mensLeonards3.jpg");

// })

$("#leonardsStory").click(function() {
	$('#leonardsStory').css({'opacity':'1'});
	$('#leonardsThreeStory,#leonardsTwoStory').css({'opacity':'0.5'});
	  $("#storyBackground").fadeTo(0.6,0.10, function() {
	      $("#storyBackground").attr("src","img/modal/mensLeonards1_2.jpg");
	  }).fadeTo(1000,1);
	  return false;
});


$("#leonardsThreeStory").click(function() {
	$('#leonardsThreeStory').css({'opacity':'1'});
	$('#leonardsTwoStory,#leonardsStory').css({'opacity':'0.5'});
	  $("#storyBackground").fadeTo(0.6,0.10, function() {
	      $("#storyBackground").attr("src","img/modal/mensLeonards3.jpg");
	  }).fadeTo(1000,1);
	  return false;
});

$("#leonardsTwoStory").click(function() {
	$('#leonardsTwoStory').css({'opacity':'1'});
	$('#leonardsThreeStory,#leonardsStory').css({'opacity':'0.5'});
	  $("#storyBackground").fadeTo(0.6,0.10, function() {
	      $("#storyBackground").attr("src","img/modal/Leonards2.jpg");
	  }).fadeTo(1000,1);
	  return false;
});


//ends

});