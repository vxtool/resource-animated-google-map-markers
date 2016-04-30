module.exports = function(grunt) {
  // Carrega configurações da pasta grunt-configs/
  var path = require('path');

  require('load-grunt-config')(grunt, {
    init: true,
    configPath: path.join(process.cwd(), 'source/tasks'),
    data: {
      projectRoot  : '../../',
      projectDir  : '../../assets/',
      projectDev  : 'source/assets/',
      projectVendor: 'node_modules/',
      pkg: grunt.file.readJSON('package.json')
    }
  });
};
