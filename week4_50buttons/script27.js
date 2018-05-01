$(document).ready(function(){
	/*
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '0.6in',
			fontSize: '24px',
			borderWidth: '10px'
		}, 1000 );
	});
*/
	$('#button-4').hover(function() {
		$('#button-3').toggleClass("change-yellow");
		$('#button-5').toggle("slow");
	});

});