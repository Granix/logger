/* worker.js
**
** author: a.michael.grant@gmail.com
** date  : october 5, 2015
**
*/

process.stdin.resume();


function _cleanUp(event){
	
};

process.on('exit', _cleanUp);
process.on('uncaughtException', _cleanUp);
process.on('SIGTERM', _cleanUp);
process.on('SIGHUP', _cleanUp);
process.on('SIGABORT', _cleanUp);
process.on('SIGINT', _cleanUp);
process.on('SIG', _cleanUp);
process.on('exit', _cleanUp);
process.on('exit', _cleanUp);
process.on('exit', _cleanUp);
process.on('exit', _cleanUp);



process.on('message', function(bundle){
	/*perform logging action here*/

});
