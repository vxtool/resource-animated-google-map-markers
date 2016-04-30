module.exports = function(grunt, options){

  var projectDir = options.projectDir;

  return {
	  site: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: {
        'index.html': '<%= projectDev %>html/index.html',
      }
    }
  };
};
