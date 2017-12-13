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
		var updatedABC = $.getJSON("@@updateABC" , {'abctext':abctext, 'uuid':uuid, 'makeSound':1} , function(data, status, xhr){
			console.log("retour de updateABC");
			// console.log(status);
			var obj = JSON.parse(data);
			// console.log(data.svg);
		});
	})

})