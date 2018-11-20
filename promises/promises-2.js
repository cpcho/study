//https://github.com/mattdesl/promise-cookbook#the-problem
//https://github.com/mpj/fpjs8/blob/master/src/app.js

import loadImage from './load-image'

/*
//without promise

loadImageCallbacked('images/cat4.jpg', 
    (error, img) => {
        let imgElement = document.createElement("img");
        imgElement.src = img.src;
        document.body.appendChild(imgElement);
    })
*/

/*
//with promise

let whenCatLoaded = loadImagePromised('images/cat3.jpg');
whenCatLoaded.then((img) => {
    let imgElement = document.createElement("img")
    imgElement.src = img.src;
    document.body.appendChild(imgElement);
})
*/

// multiple image loading using promise

let addImg = (src) => {
  let imgElement =
    document.createElement("img")
  imgElement.src = src
  document.body.appendChild(imgElement)
}

Promise.all([
  loadImage('images/cat1.jpg'),
  loadImage('images/cat2.jpg'),
  loadImage('images/cat3.jpg'),
  loadImage('images/cat4.jpg')
]).then((images) => {
  images.forEach(img => addImg(img.src))
}).catch((error) => {
  // handle error later
})

/********************************************************************/
/********************************************************************/
/********************************************************************/
// load-image.js

//Without promises
/*
function loadImage(url, callback) {
    let image = new Image();
    
    image.onload = function() {
        callback(null, image);
    }
    
    image.onerror = function() {
        let message = 'Could not load image at ' + url;
        callback(new Error(msg));
    }
    
    image.src = url;
}

export default loadImage;
*/

//With promise
function loadImage(url, callback) {
    
    return new Promise((resolve, reject) => {
        let image = new Image();
    
        image.onload = function() {
            resolve(image);
        }
        
        image.onerror = function() {
            let message = 'Could not load image at ' + url;
            reject(new Error(msg));
        }
        
        image.src = url;
    })
}

/********************************************************************/
/********************************************************************/
/********************************************************************/