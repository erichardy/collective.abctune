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
	    function openOverlay() {
		    document.getElementById("menu-overlay").style.width = "100%";
		    document.getElementById("menu-overlay").style.opacity = "0.8";  
		};
		function closeOverlay() {
			document.getElementById("menu-overlay").style.width = "0%";
		    document.getElementById("menu-overlay").style.opacity = "0"; 
		};
	    // we test if there has been changes in ABC edition
	    // returns true is changes has been made
	    function isAbcChanged() {
	    	return ($('#hidden-abc-text').val() != $("#abc-text").val());
	    };
	    function alertSaveABCOn(){
	    	$("#edit-abc").removeClass('btn-info');
			$("#edit-abc").addClass('btn-danger');
			$('#abctune-message').show();
	    };
	    function alertSaveABCOff(){
	    	$("#edit-abc").removeClass('btn-danger');
			$("#edit-abc").addClass('btn-info');
			$('#abctune-message').hide();
	    }
		function showCreateOGGButton(){
			$('#createSound-checkbox').show();
		};
		function hideCreateOGGButton(){
			$('#createSound-checkbox').hide();
		};

	    /* re-compute the size of the Textatrea */
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
		/* END re-compute the size of the Textatrea */

		if (typeof abc_text.val() !== 'undefined') {
			updateABCTextArea();
			// for abcjs_editor params : https://github.com/paulrosen/abcjs/blob/master/api.md#abcjs-editor
			var abc_editor = new ABCJS.Editor("abc-text", { canvas_id: "abc-score", warnings_id: "abc-warnings"});
			$("#abc-text").on("keyup",function(ev){
				if (isAbcChanged()){
					updateABCTextArea();
					alertSaveABCOn();
					showCreateOGGButton();
				} else {
					alertSaveABCOff();
					hideCreateOGGButton();
				}
			});
			$('#abc-edition').hide();
			hideCreateOGGButton();
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
		/* END Menu at right */

		if (typeof Raphael == 'undefined') {
			setTimeout(function(){
				console.log('raphael... tu te fais attendre !');
			}, 1000);
		}

		function updateTune(forceSound) {
			openOverlay();
			$('#abctune-message').hide();
			$("#edit-abc").removeClass('btn-danger');
			$("#edit-abc").addClass('btn-info');
			$.ajaxSetup({ cache: false });
			var abctext = $("#abc-text").val();
			var makeSound = 0;
			if ($("#checkboxCreateSound").is(':checked')){
				makeSound = 1;
			}
			if (forceSound == 1) {
				makeSound = 1;
			}
			var updatedABC = $.post("@@updateABC" , {'abctext':abctext, 'uuid':uuid, 'makeSound':makeSound} , function(data, status, xhr){

				$("#svgscore").load("@@getSVG", {'uuid':uuid});
				$("#pdf").load("@@getPDF", {'uuid':uuid});
				if ((makeSound == 1) || (forceSound == 1)) {
					$("#ogg").load("@@getOGG", {'uuid':uuid});
				}
				hideCreateOGGButton();
				var ABC_ANNOTATIONS_KEYS = [
				    'ABC_ERRORS',
				    'abc2midi_ERRORS',
				    'abc2midi_OUTPUT',
				    'abcm2ps_ERRORS',
				    'abcm2ps_OUTPUT',
				    'ps2pdf_ERRORS',
				    'ps2pdf_OUTPUT',
				    'timidity_ERRORS',
				    'timidity_OUTPUT'
				    ];
				var annots_len = ABC_ANNOTATIONS_KEYS.length;
				var i = 0;
				for (i = 0; i < annots_len; i++) {
					var k_output = ABC_ANNOTATIONS_KEYS[i];
					$('#' + k_output).load('@@getOUTPUTS', {'uuid':uuid, 'key': k_output});
				};
				closeOverlay();
			    // on synchronise l'ancien abc avec le nouveau
			    $('#hidden-abc-text').val($("#abc-text").val());
			});
		};

		$("#save-abc").click(function(){
			updateTune(0);
		});
		$("#re-ogg-score").click(function(){
			updateTune(1);
		});
		$('#show-hide-logs').click(function(){
			$('#abc-outputs-logs').toggle("slow");
		});
	  });
})


