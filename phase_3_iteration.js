Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length-1; i++) {
            if (this[i] > this[i+1]){
                // let temp;
                // temp = this[i];
                // this[i] = this[i+1];
                // this[i+1] = temp;
                [this[i],this[i+1]] = [this[i+1],this[i]]; // in ruby: this[i],this[i+1] = this[i+1],this[i]
                sorted = false;
            }
        }
    }
}

String.prototype.substrings = function() {
    let subs = [];
    for (let i = 0 ; i < this.length + 1 ; i++ ){
        for (let j = 0 ; j < i ; j++ ){
            subs.push(this.substring(i,j));
        }
    }
    return subs;
}