module.exports = function (grunt) {
	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),

	    compass: {
		    prod: {
		        src: 'scss',
		        dest: 'css',
		        forcecompile: false,
		        debugsass: false,
		        linecomments: false
		    }
		},
 
	    watch: {
	    	files: [ 'scss/*.scss' ],
    		tasks: [ 'compass:prod' ]
	    }
	});

	grunt.loadNpmTasks('grunt-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
 
	grunt.registerTask('default', [ 'compass', 'watch']);
};