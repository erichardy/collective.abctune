/* global require */

if(window.jQuery){
  define('jquery', function(){
    return window.jQuery;
  });
}

require([
  'jquery',
  'abctune-abcjs'
  ], function($){
	  'use strict';
	  $(document).ready(function(){
	    console.log("abctune bundle loading...");
	    console.log(ABCJS);
	    
  
	    var maxTextareaLines = 17;
	    var abc_text = $("#abc-text");
		var updateABCTextArea = (function(){
			var abc = $("#abc-text").val();
			var lines = abc.split('\n');
			if (lines < maxTextareaLines) {
				$("textarea#abc-text").css("min-height", (lines.length * 1.5) + "em");
			} else {
				$("textarea#abc-text").css("min-height", (maxTextareaLines * 1.5) + "em");
			}
		})
		if (typeof abc_text.val() !== 'undefined') {
			updateABCTextArea();
			// for abcjs_editor params : https://github.com/paulrosen/abcjs/blob/master/api.md#abcjs-editor
			var abc_editor = new ABCJS.Editor("abc-text", { canvas_id: "abc-score", warnings_id: "abc-warnings"});
			$("#abc-text").on("keyup",function(ev){
				updateABCTextArea();
				var self=this;
				$("#edit-abc").removeClass('btn-info');
				$("#edit-abc").addClass('btn-danger');
				$('#abctune-message').show();
			});
			$('#abc-edition').hide();
			$("#edit-abc").click(function(){
				$('#abc-edition').toggle("slow");
			})
		}
		/* Menu at right */
		var ds = $('#dashboard');
		if (typeof ds.html() !== 'undefined') {
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
		}
		if (typeof Raphael == 'undefined') {
			setTimeout(function(){
				console.log('raphael... tu te fais attendre !');
			}, 1000);
		}
	  });
})
