var path = require('path');

module.exports = function(grunt) {
  'use strict';

  // Output timing metrics
  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/config'),
    init: true,
    jitGrunt: true,
    data: {
      aliases: grunt.file.readYAML('./grunt/aliases.yaml')
    }
  });

  // Load custom grunt tasks
  grunt.loadTasks('grunt/tasks');

};
