$(document).ready(function() {
	$buttons = $('#SIFT,#CAIR');
	$buttons.on('click', function(event) {
		link = $(this).attr('id') + '.html';
		$('#main').load(link);
	});
});