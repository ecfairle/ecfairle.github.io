$(document).ready(function() {
	$buttons = $('#SIFT,#CAIR');
	$buttons.on('click', function(event) {
		event.preventDefault();
		link = $(this).attr('id') + '.html';
		$('#extra').load(link);
	});
});