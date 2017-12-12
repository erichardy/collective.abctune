/*
*/
$(document).ready(function(){
	console.log('dans EDition');

	/* https://www.w3schools.com/howto/howto_js_off-canvas.asp */
	function openOffcanvas() {
	    document.getElementById("myOffcanvas").style.width = "250px";
	    document.getElementById("main-container").style.marginRight = "250px";
	};
	function openNav3() {
	    document.getElementById("myCanvasNav").style.width = "100%";
	    document.getElementById("myCanvasNav").style.opacity = "0.8";  
	};
	function closeOffcanvas() {
	    document.getElementById("myOffcanvas").style.width = "0%";
	    document.getElementById("main-container").style.marginRight= "0%";
	    document.body.style.backgroundColor = "white";
	    document.getElementById("myCanvasNav").style.width = "0%";
	    document.getElementById("myCanvasNav").style.opacity = "0"; 
	};
	function closeOffcanvas2() {
	    document.getElementById("myOffcanvas2").style.display = "none";
	};
	$("#dashboard").click(function(){
		openNav3();
		openOffcanvas();
	});
	$("#myOffcanvas .closeOffcanvas").click(function(){
		closeOffcanvas();
	});
	$("#myOffcanvas a").click(function(){
		// ici on lance l'action que l'on veut et on ferme le menu
		closeOffcanvas();
	});
	$("#myCanvasNav").click(function(){
		closeOffcanvas();
	});
	/* END https://www.w3schools.com/howto/howto_js_off-canvas.asp */

	

})