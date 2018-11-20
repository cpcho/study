// new keyword

function Person(saying) {
    this.saying = saying;
}

Person.prototype.talk = function() {
    console.log('I say:', this.saying);
}

function spawn(constructor) { // substitue 'new' with spawn
    // 1. create a new object
    var obj = {};
    
    // 2. set the prototype
    Object.setPrototypeOf(obj, constructor.prototype);
    
    // 3. execute constructor with "this"
    var argsArray = Array.prototype.slice.apply(arguments);
    
    //console.log(arguments); //{ '0': [Function: Person], '1': 'SEMICOLONS!!!' }
    
    console.log('from arguments', argsArray.slice(1));
    
    // 4. return the created object (sometimes)
    return constructor.apply(obj, argsArray.slice(1)) || obj;
}

let crockford = spawn(Person, 'SEMICOLONS!!!');
crockford.talk();