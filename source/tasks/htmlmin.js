module.exports = function(grunt, options){

  var projectDir = options.projectDir;

  return {
	  site: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: {
        '<%= projectDir %>index.html': '<%= projectDev %>html/index.html',
      }
    }
  };
};
