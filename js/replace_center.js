$(document).ready(function() {
	$buttons = $('#SIFT,#CAIR');
	$buttons.on('click', function(event) {
		event.preventDefault();
		id = $(this).attr('id');
		if(id == "HOME"){
			$('#extra').html('');
		}
		link = id + '.html';
		$('#extra').load(link);
	});
});