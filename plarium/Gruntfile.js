module.exports = function (grunt) {
	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),

	    htmlmin: {
			dist: { 
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'index.html': 'index-source.html'
				}
			},
			dev: {
				files: {
					'index.html': 'index-source.html'
				}
			}
		},

	    uglify: {
	    	options: {
		      compress: {
		        drop_console: false
		      }
		    },
	    	my_target: {
				files: [{
					'js-dev/fancybox.min.js'  : ['js-dev/jquery.fancybox.js'],
					'js-dev/fancybox-buttons.min.js'  : ['js-dev/jquery.fancybox-buttons.js'],
					'js-dev/scripts.min.js'   : ['js-dev/scripts.js']
				}]
			}
	    },

	    concat: {
	    	dist: {
	    		src: ['js-dev/jquery-1.11.3.min.js', 'js-dev/jquery.validate.min.js', 'js-dev/fancybox.min.js', 'js-dev/fancybox-buttons.min.js', 'js-dev/scripts.min.js'],
	    		dest: 'Scripts/build.js'
	    	}
	    },
 
	    compass: {
		    prod: {
		        src: 'scss-dev',
		        dest: 'styles-dev',
		        forcecompile: false,
		        debugsass: false,
		        linecomments: false
		    }
		},

	    cssmin: {
	    	target: {
	    		files: {
	    			'css/style.min.css' : [ 'styles-dev/styles.css', 'styles-dev/jquery.fancybox.css', 'styles-dev/jquery.fancybox-buttons.css']
	    		}
	    	}
	    },
 
	    watch: {
	    	html:  {
	    		files: ['index-source.html'],
		    	tasks: ['htmlmin:dev']
	    	},
	    	scripts: {
		    	files: ['js-dev/jquery-1.11.3.min.js', 'js-dev/jquery.validate.min.js', 'js-dev/jquery.fancybox.js', 'js-dev/jquery.fancybox-buttons.js', 'js-dev/scripts.js'],
		    	tasks: [ 'uglify', 'concat']
	    	},
	    	sass: {
		    	files: [ 'scss-dev/*.scss' ],
	    		tasks: [ 'compass' ]
	    	},
	    	css: {
		    	files: [ 'styles-dev/styles.css', 'styles-dev/jquery.fancybox.css', 'styles-dev/jquery.fancybox-buttons.css' ],
		    	tasks: ['cssmin']
	    	}
	    }
	});
 
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
 
	grunt.registerTask('default', ['htmlmin:dev', 'uglify', 'concat', 'compass-clean', 'compass', 'cssmin', 'watch']);
};