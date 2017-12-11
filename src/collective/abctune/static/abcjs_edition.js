/*
*/

console.log('dans EDition');
console.log(ABCJS);

$(document).ready(function(){
	ABCJS.renderAbc('abc-score', $("#abc-text").text() , {}, {scale: .8},{});
})