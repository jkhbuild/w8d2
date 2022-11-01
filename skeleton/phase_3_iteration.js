Array.prototype.bubbleSort = function() {
    // loop
    let sorted = false
    while(!sorted) {
        sorted = true

        for (let i = 0; i < this.length - 1; i++) {
            let j = i+1;
            if (this[i] > this[j]) {
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
                sorted = false;
            }
        }
    }
    return this;
}

String.prototype.subStrings = function() {
    let subStrings = [];
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            subStrings.push(this.slice(i, j));
        }
    }
    subStrings.push(this[this.length-1]);
    subStrings.push(this.toString());
    return subStrings;
}