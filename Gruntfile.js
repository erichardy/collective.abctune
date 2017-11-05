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
                    'abctune-compiled.min.css': 'abctune.less',
                }
            }
        },
        /* ajout eh 09/06/2017 */
        uglify: {
        	dist: {
        		options: {
        			sourceMap: true,
        			banner: '/*! iuem20.js */'
        		},
	    		files: {
	    			'main-abctune-compiled.js': ['main-abctune.js'],
	    		}
        	}
        },
        cssmin: {
        	   dist: {
        	      options: {
        	    	 sourceMap: true,
        	         banner: '/*! abctune.css */'
        	      },
        	      files: {
        	         'abctune-compiled.min.css': ['abctune-compiled.css']
        	      }
        	  }
        },
        /* FIN ajout eh 09/06/2017 */
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'less/*.css'
            }
        },
        watch: {
            scripts: {
                files: [
                    '*.less',
                ],
                tasks: ['less', 'postcss']
            }
        },
        browserSync: {
            html: {
                bsFiles: {
                    src : [
                      '*.less',
                    ]
                },
                options: {
                    watchTask: true,
                    debugInfo: true,
                    online: true,
                    server: {
                        baseDir: "."
                    },
                }
            },
            plone: {
                bsFiles: {
                    src : [
                      '*.less',
                    ]
                },
                options: {
                    watchTask: true,
                    debugInfo: true,
                    proxy: "localhost:8080",
                    reloadDelay: 3000,
                    // reloadDebounce: 2000,
                    online: true
                }
            }
        }
    });


    // grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // CWD to theme folder
    grunt.file.setBase('./src/collective/abctune/static');

    grunt.registerTask('compile', ['less', 'postcss']);
    grunt.registerTask('default', ['compile']);
    grunt.registerTask('bsync', ["browserSync:html", "watch"]);
    grunt.registerTask('plone-bsync', ["browserSync:plone", "watch"]);
    grunt.registerTask('uglifyjs', ['uglify']);
};
