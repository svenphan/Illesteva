$(document).ready(function(){
	$('#signInModal,#contactModal,#shopBagModal').hide();

	$('#signInLink').on('click',function(){
		$('#signInModal').addClass('dd-show');

	});

	$('#contactLink').on('click',function(){
		$('#signInModal').removeClass('dd-show');
		$('#signInModal').addClass('dd-hidden');
		$('#contactModal').removeClass('dd-hidden');
		$('#contactModal').addClass('dd-show');

	});

	$('#signInLink').on('click',function(){
		$('#signInModal').removeClass('dd-hidden');
		$('#signInModal').addClass('dd-show');

	});
})