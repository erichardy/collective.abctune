/* global require */

if(window.jQuery){
  define('jquery', [],function(){
    return window.jQuery;
  });
}


require([
  'jquery'

  ], function($){
  'use strict';

  $(document).ready(function(){
    console.log("abctune bundle loaded");
  });
});
define("/opt/eh/collective.abctune/src/collective/abctune/static/main-abctune.js", function(){});

