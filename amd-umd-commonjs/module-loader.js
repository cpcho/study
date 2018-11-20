//AMD, UMD, CommonJS
/*
https://fem-node-api.netlify.com/
https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/
http://www.commonjs.org/specs/modules/1.0/
https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Using#Importing_CommonJS_modules
*/

/***
CommonJS
    *keywords: require and modules.exports
    *NodeJS implements CommonJS specification for its module loader
    *Synchronous and circular dependencies are supported
    *Browserify uses CommonJS in browser
***/

    //payments.js
    var customerStore = require('store/customer'); // import module
    
    //store/customer.js
    function customerStore () {
        return customers.get('store');
    }
    
    modules.exports = customerStore;


/***
Asynchronous Module Definition (AMD)
    *keyword: define
    *born as CommonJS was not suitable for browser
    *asynchronous module loader
    *RequireJS implements AMD
***/

define(['module1', ',module2'], function(module1, module2) {
  console.log(module1.setName());
  
  function sum(a,b) {
      return a+b;
  } // private because it's not returned at the end
  
  function prod(a,b) {
      return a*b;
  } // public because it's returned at the end
  
  //exposed public methods
  return {
      prod: prod
  }
});

//RequireJS
<script data-main="scripts/main" src="scripts/require.js"></script>


/***
Universal Module definition (UMD)
    *supports both AMD and CommonJS
***/

(function (window, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD style
        define(['jquery', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS (NodeJS) style
        module.exports = factory(require('jquery'), require('underscore'));
    } else {
        // Browser globals (on window)
        window.returnExports = factory(window.jQuery, window._);
    }
}(this, function ($, _) {
    function sum(a,b) {
        return a+b;
    } // private because it's not returned at the end
    
    function prod(a,b) {
        return a*b;
    } // public because it's returned at the end
    
    //exposed public methods
    return {
        prod: prod
    }
}));