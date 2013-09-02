module.exports = function(grunt) {
  var target = grunt.option('target') || 'android';
  
// Project configuration.
  grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	coffee: {
    		compile: {
    			files: {
				//'www/js/base.js': ['src/coffee/base/*.coffee'], // compile base ut stuff
    				'www/js/app.js': ['src/coffee/*.coffee'] // compile and concat into single file
    			}
	    	}
	},

/*	haml: {		
		compile: {
			options: {
				target: 'js'
			},
			files: {
				'www/js/views.js': ['src/views/haml/*.haml'] // compile and concat into single file
			}
		}
	},*/

	copy: {
		android: {
				files: [
					{expand: true, cwd: 'www/js/', src: ['**'], dest: 'platforms/'+target+'/assets/www/js/'},
					{expand: true, cwd: 'www/css/', src: ['**'], dest: 'platforms/'+target+'/assets/www/css/'},
					{expand: true, cwd: 'www/img/', src: ['**'], dest: 'platforms/'+target+'/assets/www/img/'},
					{expand: true, cwd: 'www/', src: 'index.html', dest: 'platforms/'+target+'/assets/www/'},
//					{src: 'www/js/views.js', dest: 'platforms/'+target+'/assets/www/js/views.js'}
				]
		}
	},
  });


  grunt.loadNpmTasks('grunt-contrib-copy');
  // Load the plugin that provides the "coffee" task.
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-haml');

  // Default task(s).
  //grunt.registerTask('default', ['coffee','haml', 'copy:'+target]);
  grunt.registerTask('default', ['coffee','copy:'+target]);
};
