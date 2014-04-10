$(document).on(
	"click",
	"a",
	function(event){
		location.href = $(event.target).attr("href");
	}
);