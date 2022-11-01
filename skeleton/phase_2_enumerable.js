Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        this[i] = (callback(this[i]));
    }
    return this;
}

// const callback1 = function(x) {
//     return x + 2;
// }

// const callback2 = (x) => x+2;

function newCallback(x) {
    return x + 2;
}

Array.prototype.myMap = function (callback) {
    
    return this.myEach(callback)

}

Array.prototype.myReduce = function (callback, initialValue = this[0]) {
    let acc = initialValue;
    this.myEach(el =>{ 
        acc = callback(acc, el)
    });
    return acc;
}