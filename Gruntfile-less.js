module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // we could just concatenate everything, really
        // but we like to have it the complex way.
        // also, in this way we do not have to worry
        // about putting files in the correct order
        // (the dependency tree is walked by r.js)
        less: {
            dist: {
                options: {
                    paths: [],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: 'abctune-compiled.min.css.map',
                    sourceMapFilename: 'abctune-compiled.min.css.map',
                    modifyVars: {
                        "isPlone": "false"
                    }
                },
                files: {
                    'abctune-compiled.css': 'abctune.less',
                }
            }
        },
        cssmin: {
     	   dist: {
     	      options: {
     	    	 sourceMap: true,
     	         banner: '/*! iuem20.css */'
     	      },
     	      files: {
     	         'abctune-compiled.min.css': ['abctune-compiled.css']
     	      }
     	  }
     }
})
// grunt.loadTasks('tasks');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-postcss');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');

// CWD to theme folder
grunt.file.setBase('./src/collective/abctune/static');

grunt.registerTask('compile', ['less', 'cssmin']);
grunt.registerTask('default', ['compile']);
grunt.registerTask('bsync', ["browserSync:html", "watch"]);
grunt.registerTask('plone-bsync', ["browserSync:plone", "watch"]);
grunt.registerTask('uglifyjs', ['uglify']);
};
