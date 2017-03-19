module.exports = function (grunt) {
	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),

	    compass: {
	    	dev: {
			    options: {
			        sassDir: 'scss',
			        cssDir: 'css',
			        environment: 'production'
		    	}
	    	}
		},
 
	    watch: {
	    	files: [ 'scss/*.scss' ],
    		tasks: [ 'compass' ]
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
 
	grunt.registerTask('default', [ 'compass', 'watch']);
};