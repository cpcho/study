//https://developers.google.com/web/fundamentals/primers/promises

/*
A promise can be:

*fulfilled - The action relating to the promise succeeded
*rejected - The action relating to the promise failed
*pending - Hasn't fulfilled or rejected yet
*settled - Has fulfilled or rejected
*/

function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

/*
get('story.json').then(function(response) {
	return JSON.parse(response);
}).then(function(response) {
	console.log("JSON!", response);
})
*/

get('story.json').then(JSON.parse).then(function(response) {
	console.log("JSON!", response);
})

//In fact, we could make a getJSON() function really easily:
function getJSON(url) {
	return get(url).then(JSON.parse);
}

/***********************************************/
var promise = new Promise(function(resolve, reject) {
	resolve(1);
});

promise.then(function(val) {
	console.log(val);
	return val + 2;
}).then(function(val) {
	console.log(val);
})