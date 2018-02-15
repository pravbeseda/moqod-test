'use strict';


module.exports = function (grunt) {

require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>*/\n',
    // Task configuration.
    clean: {
      files: ['app']
    },
    concat: {
      js: {
        src: ['src/external/*.js', 'src/js/**/*.js'],
        dest: 'app/js/script.js'
      },
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      distJS: {
        files: {
          'app/js/script.min.js': ['app/js/script.js'],
        }
      },
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'app/css/main.css': 'src/scss/main.scss'
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundPrecision: -1
      },
      combine: {
        files: {
          'app/css/main.min.css': ['app/css/main.css']
        }
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: 'index.html',
        dest: 'app',
      },
      img: {
        expand: true,
        cwd: 'src',
        src: 'img/*',
        dest: 'app',
      },
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 9000,
          livereload: true,
          // keepalive: true
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/*.js'],
        tasks: ['clean', 'copy'],
        options: {
          spawn: true
        }
      }
    }
    
  });

  // grunt.event.on('watch', function(action, filepath, target){
  //   grunt.log.writeln(target + ":" + filepath + " has  " + action)
  // })

  grunt.loadNpmTasks('grunt-dev-update');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['connect']);
  grunt.registerTask('dev', ['connect', 'watch']);
  grunt.registerTask('w', ['watch']);
  grunt.registerTask('release', ['clean', 'concat', 'uglify', 'sass', 'cssmin', 'copy']);
};
