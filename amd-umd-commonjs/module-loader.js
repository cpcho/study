//AMD, UMD, CommonJS
/*
https://fem-node-api.netlify.com/
https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/
http://www.commonjs.org/specs/modules/1.0/
https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Using#Importing_CommonJS_modules

-CommonJS: Module loader. Node uses CommonJS for its module loader.
-Using require() we can get access to build-in and 3rd party npm modules.
*/

// built in node module
var path = require('path');

// 3rd party module downloaded into node_modules/
var _ = require('lodash');

// a module we created in another file
var myModule = require('./path/to/my/module');