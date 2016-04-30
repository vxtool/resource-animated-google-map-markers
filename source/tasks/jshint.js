module.exports = function(grunt, options){

  var projectDev = options.projectDev;

  return {
    options: {
        jshintrc: 'source/tasks/config/.jshintrc'
    },
    landing: ['<%= projectDev %>js/{,*/,**/}*.js']
  };
};
