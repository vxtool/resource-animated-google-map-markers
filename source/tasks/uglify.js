module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;
  var projectVendor = options.projectVendor;

  return {
    options: {
      mangle: {
        except: ['jQuery']
      }
    },
    site: {
      files: {
        '<%= projectDir %>js/script.min.js':
        [
        '<%= projectDev %>js/maps.js',
        '<%= projectDev %>js/script.js'
        ]
      }
    }
  };
};
