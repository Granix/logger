/* logger.js
**
** author: a.michael.grant@gmail.com
** date  : october 5, 2015
**
*/

var path = require('path');
var fs = require('fs');
var fork = require('child_process').fork;
var merge = require('merge');


function Logger(options){

  if(Logger.instance !== undefined)
    return Logger.instance

  var opt = merge({
    logRotation: '',
    outputFile: '',
    errorFile:  ''
  }, options || {});
  var logfile;
  var worker = fork( path.resolve('./worker.js'), [], {});

  /*All public methods*/
  Logger.instance = {
  	/**/
    
    log: function(){},
    info: function(){},
    error: function(){},
    dir: function(){}
  };

  return Logger.instance;
};

module.exports = Logger();