/*
*/

console.log('dans EDition');
console.log(ABCJS);

$(document).ready(function(){
	var scoreSize = .8;
	var keyUp_delay = 2000;
	function updateABC() {
		var input = $("#abc-text").val();
		// var scoreSize = $("#abc-edit-slider-size").slider("option", "value") ;
		// updateSlider() ;
		ABCJS.renderAbc('abc-score', input, {print: true}, {scale:scoreSize , editable: true, responsive:"resize"},{});
		// ABCJS.renderMidi('midi-edit',input, {});
		/*
		if ( ! isModified ) {
			// $("#avertissementTuneModified").html(tuneModified);
			$("#tuneModified").show() ;
			isModified = true ;
		}
		*/
	};
	// Delay for updateABC: 2000ms (2 seconds)
	//
	// implementation of the answer of Anderson Aug 19 '13 at 2:48
	// in http://stackoverflow.com/questions/1909441/jquery-keyup-delay
	var delay = (function(){
	    var timer = 0;
	    return function(callback, ms){
	      clearTimeout (timer);
	      timer = setTimeout(callback, ms);
	    };
	})(); 
	var duplicateFilter=(function(){
		  var lastContent;
		  return function(content, callback){
		    content=$.trim(content);
		    if(content!=lastContent){
		      callback(content);
		    }
		    lastContent=content;
		  };
		})();

	// ABCJS.renderAbc('abc-score', $("#abc-text").val() , {}, {scale: scoreSize},{});
	// for abcjs_editor params : https://github.com/paulrosen/abcjs/blob/master/api.md#abcjs-editor
	var updateABCTextArea = (function(){
		abc = $("#abc-text").val();
		lines = abc.split('\n');
		$("textarea#abc-text").css("min-height", (lines.length * 1.5) + "em");
	})
	updateABCTextArea();
	abc_editor = new ABCJS.Editor("abc-text", { canvas_id: "abc-score", warnings_id: "abc-warnings"});
	$("#abc-text").on("keyup",function(ev){
		updateABCTextArea();
	});
	/*
	$("#abc-text").on("keyup",function(ev){
		  var self=this;
		  delay(function(){
		    duplicateFilter($(self).val(), function(c){
		    	updateABC();
		        // console.log(c);
		    });
		  }, keyUp_delay );
		})
*/
	

})