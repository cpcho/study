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

getJSON('story.json').then(function(story) {
  return getJSON(story.chapterUrls[0]);
}).then(function(chapter1) {
  console.log("Got chapter 1!", chapter1);
})
/***********************************************/
var storyPromise;

function getChapter(i) {
  storyPromise = storyPromise || getJSON('story.json');
  return storyPromise.then(function(story) {
    return getJSON(story.chapterUrls[i]);
  })
}

// and using it is simple:
getChapter(0).then(function(chapter) {
  console.log(chapter);
  return getChapter(1);
}).then(function(chapter) {
  console.log(chapter);
})

get('story.json').then(function(response) {
  console.log("Success", response);
}, function(error) {
  console.log("Failed!", error);
})

get('story.json').then(function(res) {
  console.log("Success", res);
}).catch(function(err) {
  console.log("Failed", err);
})



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


/***********************************************/

var jsonPromise = new Promise(function(resolve, reject) {
  resolve(JSON.parse("This ain't JSON"));
});

jsonPromise.then(function(data) {
  console.log("It worked", data);
}).catch(function(err) {
  console.log("It failed", err);
})

getJSON('story.JSON').then(function(story) {
  return getJSON(story.chapterUrls[0]);
}).then(function(chapter1) {
  addHtmlToPage(chapter1.html);
}).catch(function() {
  addTextToPage("Failed to show chapter");
}).then(function() {
  document.querySelector('.spinner').style.display = 'none';
})

function getJSON(url) {
  return get(url).then(JSON.parse).catch(function(err) {
    console.log("getJSON failed for", url, err);
    throw err;
  });
}
/***********************************************/

getJSON('story.json').then(function(story) {
  addHtmlToPage(story.heading);
}).then(function() {
  addTextToPage("All done");
}).catch(function(err) {
  addTextToPage("broken: " + err.message);
}).then(function() {
  document.querySelector('.spinner').style.display = 'none';
})


// Start off with a promise that always resolves
var sequence = Promise.resolve();
/*
// Loop through our chapter urls
story.chapterUrls.forEach(function(chapterUrl) {
  sequence = sequence.then(function() {
    return getJSON(chapterUrl);
  }).then(function(chapter) {
    addHtmlToPage(chapter.html);
  });
})
*/

story.chapterUrls.reduce(function(sequence, chapterUrl) {
  return sequence.then(function() {
    return getJSON(chapterUrl);
  }).then(function(chapter) {
    addHtmlToPage(chapter.html);
  });
}, Promise.resolve())
/***********************************************/

getJSON('story.json').then(function(story) {
  addHtmlToPage(story.heading);
  
  return story.chapterUrls.reduce(function(sequence, chapterUrl) {
    return sequence.then(function() {
      return getJSON(chapterUrl);
    }).then(function(chapter) {
      addHtmlToPage(chapter.html);
    });
  }, Promise.resolve());
}).then(function() {
  addTextToPage('All done');
}).catch(function(err) {
  addTextToPage('Broken: ' + err.message);
}).then(function() {
  document.querySelector('.spinner').style.display = 'none';
})
/***********************************************/
getJSON('story.json').then(function(story) {
  addHtmlToPage(story.heading);
  return story.chapterUrls.map(getJSON)
    .reduce(function(sequence, chapterPromise) {
      return sequence.then(function() {
        return chapterPromise;
      }).then(function(chapter) {
        addHtmlToPage(chapter.html);
      });
    }, Promise.resolve());
}).then(function() {
  addTextToPage("All Done");
}).catch(function(err) {
  addTextToPage("broken: " + err.message);
}).then(function() {
  document.querySelector('.spinner').style.display = 'none';
})

