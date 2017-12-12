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
  });
	  var maxTextareaLines = 17;
		var updateABCTextArea = (function(){
			var abc = $("#abc-text").val();
			var lines = abc.split('\n');
			if (lines < maxTextareaLines) {
				$("textarea#abc-text").css("min-height", (lines.length * 1.5) + "em");
			} else {
				$("textarea#abc-text").css("min-height", (maxTextareaLines * 1.5) + "em");
			}
		})
		updateABCTextArea();
		/*
		 for abcjs_editor params : https://github.com/paulrosen/abcjs/blob/master/api.md#abcjs-editor
		 */
		var abc_editor = new ABCJS.Editor("abc-text", { canvas_id: "abc-score", warnings_id: "abc-warnings"});
		$("#abc-text").on("keyup",function(ev){
			updateABCTextArea();
		});


})
