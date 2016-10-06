/**
 * Gruntfile Config for compiling less and Javascript
 */

module.exports = function (grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    grunt.initConfig({

        /**
         * Copy Required Assets
         */
        copy: {
            fonts: {
                nonull: true,
                files: [{
                    expand: true,
                    cwd: 'bower_components/font-awesome/fonts',
                    src: '*',
                    dest: 'public/assets/fonts/'
                }]
            },
            css: {
                nonull: true,
                files: [{
                    expand: true,
                    cwd: 'bower_components/animate.css/source',
                    src: [
                        '**/*.css',
                    ],
                    dest: [
                        'frontend/sass/vendor/animate/',
                    ],
                    rename: function(dest, src) {
                        return dest + src.replace('.css','.scss');
                    }
                }]
            }
        },

        /**
         * SCSS Compilation
         */
        sass: {
            options: {
				sourcemap: false,
				style: 'expanded',
				cacheLocation: '/tmp/.latePayerSassCache'
			},
			compile: {
			    files : {
			        'public/assets/css/sitewide.css' : 'frontend/sass/sitewide.scss'
			    }
			}
        },

        /**
         * Run Autoprefixer on compiled CSS
         */
        autoprefixer: {
            options: {
                browsers: [
                    "Android 2.3",
                    "Android >= 4",
                    "Chrome >= 20",
                    "Firefox >= 24",
                    "Explorer >= 8",
                    "iOS >= 6",
                    "Opera >= 12",
                    "Safari >= 6"
                ]
            },
            dist: {
                options: {
                    map: false
                },
                src: 'public/assets/css/*.css'
            }
        },

        /**
         * Run CSS Comb on compiled CSS
         */
        csscomb: {
            options: {
                config: 'frontend/csscomb.json'
            },
            dist: {
                expand: true,
                cwd: 'public/assets/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'public/assets/css/'
            }
        },

        /**
         * Make a minified copy of the final CSS
         */
        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '*',
                sourceMap: false,
                noAdvanced: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'public/assets/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'public/assets/css',
                        ext: '.min.css'
                    }
                ]
            }
        },

        /**
         * Run JSHint on our own JS Files
         */
        jshint: {
            options: {
                jshintrc: 'frontend/js/.jshintrc'
            },
            core: {
                src: 'frontend/js/*.js'
            },
        },

        /**
         * Concat JS
         */
        concat: {
            options: {
                stripBanners: true
            },
            main: {
                src: [
                    // jQuery
                    'bower_components/jquery/dist/jquery.min.js',
                    // Fastclick
                    'bower_components/fastclick/lib/fastclick.js',

                    // Responsive Elements
                    //'bower_components/responsive-elements/responsive-elements.js',

                    // Date Formatting
                    'bower_components/moment/moment.js',

                    // Date Picker
                    'bower_components/pikaday/pikaday.js',

                    // Mustache
                    'bower_components/mustache.js/mustache.js',

                    // Sitewide
                    'frontend/js/main.js'
                ],
                dest: 'public/assets/js/main.js'
            }
            /*
            ,
            head: {
                src: [
                    // Modernizr
                    'bower_components/modernizr/modernizr.js',
                    'frontend/js/head.js'
                ],
                dest: 'public/assets/js/head.js'
            }
            */
        },

        /**
         * Minify JS
         */
        uglify: {
            options: {
                compress: {
                    warnings: false
                },
                mangle: true,
                preserveComments: 'some'
            },
            main: {
                src:  'public/assets/js/main.js',
                dest: 'public/assets/js/main.min.js'
            }
            /*
            ,
            head: {
                src:  'public/assets/js/head.js',
                dest: 'public/assets/js/head.min.js'
            }
            */
        },

        'cache-busting': {
            css: {
                replace: ['templates/layout/layout.phtml'],
                replacement: 'sitewide.css',
                file: 'public/assets/css/sitewide.min.css',
                cleanup: true
            },
            js : {
                replace: ['templates/layout/layout.phtml'],
                replacement: 'main.min.js',
                file: 'public/assets/js/main.min.js',
                cleanup: true
            }
        },


        /**
         * Watch Config
         */
        watch: {
			sass: {
			    files: [
			        'frontend/sass/**/*.{scss,sass}',
			        'frontend/sass/_partials/**/*.{scss,sass}'
			    ],
				tasks: ['dist-scss']
			},
			js : {
			    files: 'frontend/js/*.js',
			    tasks: ['dist-js']
			},
			grunt: {
                files: ['Gruntfile.js']
            }
		}

    });

    /**
     * This means we don't have to add
     * grunt.loadNpmTasks('task-name');
     * for all of our devDependencies
     */
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

    // CSS Compile Task
    grunt.registerTask('dist-scss', ['sass:compile', 'autoprefixer:dist', 'csscomb:dist', 'cssmin:dist', 'cache-busting:css']);
    // JS Compile Task
    grunt.registerTask('dist-js', ['jshint:core', 'concat:main', 'uglify:main', 'cache-busting:js', /*, 'concat:head', 'uglify:head'*/]);
    // Build tasks
    grunt.registerTask('build', ['dist-scss', 'dist-js', 'copy:css', 'copy:fonts']);
    // Default task is to watch
    grunt.registerTask('default',['watch']);

};
