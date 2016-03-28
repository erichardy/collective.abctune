/*
	----------------------------------------------------------
	Build environment
	----------------------------------------------------------
	1) Install NodeJS:
		http://nodejs.org/
	2) Install dev dependencies
	  npm install
	3) Install Grunt CLI globally
		npm install grunt-cli -g
	----------------------------------------------------------
*/

module.exports = function (grunt) {
	grunt.initConfig({
		concat: {
			'build/MIDI.js': [
//				'js/color/spaceW3.js', // optional
				'inc/shim/Base64.js',
				'inc/shim/base64binary.js',
				'js/midi/audioDetect.js',
				'js/midi/gm.js',
				'js/midi/loader.js',
				'js/midi/player.js',
				'js/midi/plugin.audiotag.js',
				'js/midi/plugin.webaudio.js',
				'js/midi/plugin.webmidi.js',
				
				'js/util/dom_request_script.js',
				'js/util/dom_request_xhr.js'
//				'js/midi/synesthesia.js', // optional
				 // req when using XHR
				 // req otherwise
//				'js/widget/loader.js', // optional	
			]
		},
		uglify: {
			'build/MIDI.min.js': [
				'build/MIDI.js'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	///
	grunt.registerTask('default', ['concat', 'uglify']);
	///
};