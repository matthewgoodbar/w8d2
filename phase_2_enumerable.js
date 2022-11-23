Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]) 
    }
}

// Array.prototype.myMutate = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         this[i] = callback(this[i]) 
//     }
// }

Array.prototype.myMap = function(callback) {
    let res = [];
    this.myEach((el) => {
        res.push(callback(el));
    })
    return res;
}

Array.prototype.myReduce = function(callback, initialValue) {
    if (initialValue === undefined) {
        console.log(`initial value is undefined, so it will be assigned to ${this[0]}`);
        let accumulator = this[0];
        for (let i = 1; i < this.length; i++) {
            accumulator = callback(accumulator,this[i]); 
        }
        return accumulator;
    } else {
        console.log(`initial value is ${initialValue}`);
        let accumulator = initialValue;
        for (let i = 0; i < this.length; i++) {
            accumulator = callback(accumulator,this[i]); 
        }
        return accumulator;
    }
}