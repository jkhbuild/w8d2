Array.prototype.uniq = function() {
    let arr = []
    this.forEach (el => {
        if(!arr.includes(el)) {
            arr.push(el);
        };

    });
    return console.log(arr);
};

Array.prototype.twoSum = function() {
    let arr = []
    for (let i=0; i < this.length ;i++) {
        for (let j=i+1; j < this.length ;j++){
            if(this[i] + this[j] === 0) {
                arr.push([this[i], this[j]]);
            }
        }
    }
return arr;
}


Array.prototype.transpose = function() {
    let arr = [];
    for (let i = 0; i < this[0].length; i++) {
        subArray = [];
        for (let j = 0; j < this.length; j++) {
            subArray.push(this[j][i]);
        }
        arr.push(subArray)
    }
    return arr;
}


