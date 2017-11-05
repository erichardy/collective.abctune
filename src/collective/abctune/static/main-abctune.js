/* global require */

if(window.jQuery){
  define('jquery', function(){
    return window.jQuery;
  });
}


require([
  'jquery'

  ], function($){
  'use strict';

  $(document).ready(function(){
    console.log("abctune bundle loading...");
    window.onload = function () {
    	console.log('main-abctune.js loaded')
    };
  });
})