/* global require */

if(window.jQuery){
  define('jquery', function(){
    return window.jQuery;
  });
}

require([
  'jquery',
  'abctume-abcjs'
  ], function($){
	  'use strict';
	  $(document).ready(function(){
	    console.log("abctune bundle loading...");
	    console.log(ABCJS);
  });
})

define('main-abctune',['jquery'], function($){
	console.log('ddefine : main-abctune');
})