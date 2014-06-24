$(function () {
	var $tabButtons = $('.tab-buttons li a'),
		$tabsContent = $('.tabs li');

	$tabsContent.removeClass('no-script');	

	$tabButtons.on('click', function(event) {
		event.preventDefault();
		$tabButtons.removeClass('active-tab-button');
		$(this).addClass('active-tab-button');

		$tabsContent.removeClass('active-tab');
		$($(this).attr('href')).addClass('active-tab');		
	});
});