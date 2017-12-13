/*
*/
$(document).ready(function(){

	$("#save-abc").click(function(){
		console.log('Save ABC');
		$('#abctune-message').hide();
		$("#edit-abc").removeClass('btn-danger');
		$("#edit-abc").addClass('btn-info');
		$.ajaxSetup({ cache: false });
		abctext = $("#abc-text").val();
		var updatedABC = $.post("@@updateABC" , {'abctext':abctext, 'uuid':uuid, 'makeSound':1} , function(data, status, xhr){
			console.log("retour de updateABC");
			var svg = $.post("@@getSVG", {'uuid':uuid}, function(data){
				console.log(data);
				$("#svgscore").html(data);
			});
			var pdf = $.post("@@getPDF", {'uuid':uuid}, function(data){
				console.log(data);
				$("#pdf").html(data);
			});
			var ogg = $.post("@@getOGG", {'uuid':uuid}, function(data){
				console.log(data);
				$("#ogg").html(data);
			});

			
		});
	})

})