/*
*/
$(document).ready(function(){

	function updateTune() {
		console.log('Save ABC');
		document.getElementById("menu-overlay").style.width = "100%";
	    document.getElementById("menu-overlay").style.opacity = "0.8";  
		$('#abctune-message').hide();
		$("#edit-abc").removeClass('btn-danger');
		$("#edit-abc").addClass('btn-info');
		$.ajaxSetup({ cache: false });
		var abctext = $("#abc-text").val();
		var makeSound = 0;
		if ($("#checkboxCreateSound").is(':checked')){
			makeSound = 1;
		}
		var updatedABC = $.post("@@updateABC" , {'abctext':abctext, 'uuid':uuid, 'makeSound':makeSound} , function(data, status, xhr){
			console.log("retour de updateABC");
			var svg = $.post("@@getSVG", {'uuid':uuid}, function(data){
				$("#svgscore").html(data);
			});
			var pdf = $.post("@@getPDF", {'uuid':uuid}, function(data){
				$("#pdf").html(data);
			});
			var ogg = $.post("@@getOGG", {'uuid':uuid}, function(data){
				$("#ogg").html(data);
			});
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
			console.log('Fin des appels AJAX');
			document.getElementById("menu-overlay").style.width = "0%";
		    document.getElementById("menu-overlay").style.opacity = "0";  
		});
	};
	$("#save-abc").click(function(){
		updateTune();
	});
})
