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
	  var scoreSize = .8 ;
	  // ABCJS.renderAbc('abc-score', $("#abc-text").text() , {}, {scale: scoreSize},{});
	  // ABCJS.renderAbc('abc-score', $("#abc-text").text() , {}, {scale: .8},{});
})

define('main-abctune',['jquery'], function($){
	console.log('ddefine : main-abctune');
})