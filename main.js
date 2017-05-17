function scroll(elem) {
	$('html, body').animate({
		scrollTop: $(elem).offset().top
	}, 2000);
}

function countdown() {
	var end = new Date(2017, 9, 13, 17);
	var now = new Date();
	var text = '';
	var remaining = Math.abs(end - now) / 1000;

	var days = Math.floor(remaining / 86400);
	remaining -= days * 86400;
	text += days + "d ";

	var hours = Math.floor(remaining / 3600) % 24;
	remaining -= hours * 3600;
	text += hours + "h ";

	var minutes = Math.floor(remaining / 60) % 60;
	remaining -= minutes * 60;
	text += minutes + "m ";

	var seconds = remaining % 60;
	text += parseInt(seconds, 10) + "s";
	$('#countdown').text(text);
}

countdown();
$('#countdown').hide();
window.setInterval(countdown, 1000);

$('#date').mouseenter(function() {
	$('#date').hide();
	$('#countdown').show();
});

$('#countdown').mouseleave(function() {
	$('#countdown').hide();
	$('#date').show();
});