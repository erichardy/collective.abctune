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
    console.log("abctune bundle loaded...aaaaz");
    window.onload = function () {
    MIDI.loadPlugin({
        soundfontUrl: "Plone/++plone++abctune/bower_components/MIDI.js/examples/soundfont/",
        instrument: "acoustic_grand_piano",
        onprogress: function(state, progress) {
            // MIDI.loader.setValue(progress * 100);
            console.log(state, progress);
        },
        onsuccess: function() {
            player = MIDI.Player ;
            player.timeWarp = 1;
            player.loadFile("http://myplone:8080/Plone/ColmanCross1.mid",
                        player.start)
            }
        })
    };
  });
})