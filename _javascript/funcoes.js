$(document).ready(function() {
	$("img#todas").click(function(){
		$("div.jcarousel-wrapper").hide(0, function(){
			$("ul#album-fotos").show(0);
		});
		
	});
	
	$("img#carrocel").click(function(){
		$("ul#album-fotos").hide(0, function(){
			$("div.jcarousel-wrapper").show(0);
		});
	});
});