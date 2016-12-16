// by gabixdev :)

$(document).ready(function() {
	
	// MENU
	$(".paginator-list-link").click(function() {
		console.log("CLICKED " + this);
		$(".paginator-list-link").removeClass(".active");
		$(this).addClass(".active");
	});
});