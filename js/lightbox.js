$( document ).ready( function(){

	$("#openLB").click( function(){
		console.log( "TEST CLICK ");

		//window.location= "index.html"
		$("#lightbox").fadeIn();
	})

	$("#closeBtn").click( function(){
		$("#lightbox").fadeOut();
	})

})