module.exports = function(grunt) {
  /*
    Run following commands in console

    # Install plug-ins in this folder
    npm install

    # run default tasks
    grunt
    # run build tasks
    grunt build
    # run imagemin tasks (only new images)
    grunt img
    # run imagemin tasks (all images)
    grunt imgAll
  */

  // loadNpmTasks
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    imagemin: {
      dynamic: {
        options: {
          progressive:  true,
          interlaced:   true,
          pngquant:     true
        },
        files: [{
          expand: true,
          cwd: 'fileadmin/images/',     // Quellordner
          src: ['**/*.{png,jpg,gif}'],  // Pattern
          dest: 'fileadmin/images/'     // Zierlordner
        }]
      }
    },

    watch: {
      html: {
        files: 'index.html',
        options: {
          livereload: true,
        },
      }
    },

    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'fileadmin/',
        src: ['**/*.{js,css}'],
        dest: 'fileadmin/'
      }
    }
  });

  // tasks
  grunt.registerTask('default', ['newer:compress', 'watch']);
  grunt.registerTask('build', ['newer:compress']);
  grunt.registerTask('img', ['newer:imagemin']);
  grunt.registerTask('imgAll', ['imagemin']);

};