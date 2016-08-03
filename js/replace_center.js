$(document).ready(function() {
	$buttons = $('#SIFT,#CAIR,#home');
	$buttons.on('click', function(event) {
		event.preventDefault();
		id = $(this).attr('id');
		if(id == "home"){
			$('#extra').html('');
			return false;
		}
		link = id + '.html';
		$('#extra').load(link);
	});
});