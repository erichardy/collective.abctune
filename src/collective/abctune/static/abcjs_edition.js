/*
*/
$(document).ready(function(){
	console.log('dans EDition');

	/* https://www.w3schools.com/howto/howto_js_off-canvas.asp */
	function openAbctuneMenu() {
	    document.getElementById("actions-menu").style.width = "250px";
	    document.getElementById("main-container").style.marginRight = "250px";
	};
	function openOverlay() {
	    document.getElementById("menu-overlay").style.width = "100%";
	    document.getElementById("menu-overlay").style.opacity = "0.8";  
	};
	function closeAbctuneMenu() {
	    document.getElementById("actions-menu").style.width = "0%";
	    document.getElementById("main-container").style.marginRight= "0%";
	    document.body.style.backgroundColor = "white";
	    document.getElementById("menu-overlay").style.width = "0%";
	    document.getElementById("menu-overlay").style.opacity = "0"; 
	};
	$("#dashboard").click(function(){
		openOverlay();
		openAbctuneMenu();
	});
	$("#actions-menu .closeMenu").click(function(){
		closeAbctuneMenu();
	});
	$("#actions-menu a").click(function(){
		// ici on lance l'action que l'on veut et on ferme le menu
		closeAbctuneMenu();
	});
	$("#menu-overlay").click(function(){
		closeAbctuneMenu();
	});
	/* END https://www.w3schools.com/howto/howto_js_off-canvas.asp */

	// var abc_editor = new ABCJS.Editor("abc-text", { canvas_id: "abc-score", warnings_id: "abc-warnings"});
	
	$("#abc-text").on("keyup",function(ev){
		  var self=this;
		  // $('#abctune-message').html('Content changed !');
		  $("#abc-text").css('background-color', '#fff0f0');
		  $('#abctune-message').show();
		})

	$('#abc-edition').hide();
	$("#edit-abc").click(function(){
		console.log('active edition');
		$('#abc-edition').toggle("slow");
	})
		/*
	area = $('#abc-text');
	area.change(function(){
		console.log('Changements...');
	})*/
})