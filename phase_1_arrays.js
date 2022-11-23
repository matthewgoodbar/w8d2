Array.prototype.uniq = function() {
    let newArray = [];
    this.forEach((el) => {
        if (!newArray.includes(el)){
            newArray.push(el);
        }
    });
    return newArray;
}

Array.prototype.twoSum = function() {
    let pairs = [];
    for(let i = 0; i < this.length; i++){
        for(let j = 0; j < i; j++){
            if(this[i] + this[j] === 0){
                pairs.push([j, i]);
            }
        }
    }
    return pairs;
}

Array.prototype.transpose = function() {
    let res = Array(this.length).fill().map(() => Array(this.length).fill(0));
    for(let i = 0; i < this.length; i++){
        for(let j = 0; j < this.length; j++){
            res[j][i] = this[i][j]
        }
    }
    return res;
}