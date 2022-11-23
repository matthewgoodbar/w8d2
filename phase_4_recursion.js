function myRange(start, end) {
    // base case
    if (start === end) {
        return [start];
    } 
    // recursive step
    return [start].concat(myRange(start+1,end));
}

function sumRec(array) {
    if (array.length === 0) {
        return 0;
    }

    return array[0] + sumRec(array.slice(1));
}

function exp1(base, pow) {
    if (pow === 0){
        return 1;
    }
    return base * exp1(base, pow-1);
}

function exp2(base, pow) {
    if (pow === 0){
        return 1;
    }
    // recursive step
    if (pow % 2 === 0) {
        // exp(b, n / 2) ** 2             [for even n]
        return exp2(base,pow/2) ** 2;
    } else {
        // b * (exp(b, (n - 1) / 2) ** 2) [for odd n]
        return base * exp2(base,(pow-1)/2) ** 2;
    }
}

// receives an integer, n, and returns the first n Fibonacci numbers
function fibonacci(n) {
    if (n === 1) {
        return [1]
    }
    if (n === 2) {
        return [1,1]
    }

    let previous = fibonacci(n-1);
    return previous.concat([previous[previous.length-1] + previous[previous.length-2]])

}

function deepDup(array) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            res.push(deepDup(array[i]));
        } else {
            res.push(array[i]);
        }
    }
    return res;
}

function bsearch(arr, target) {
    if (arr.length === 0) {
        return null;
    }
    let mp = Math.floor(arr.length / 2); // javascript returns a float if the result is decimal
    if (arr[mp] === target){
        return mp;
    }
    left = arr.slice(0,mp);
    right = arr.slice(mp+1,arr.length);
    if (target < arr[mp]) {
        // search left
        return bsearch(left,target);
    } else {
        // search right
        let subsearch = bsearch(right,target);
        if (subsearch === null) {
            return null;
        } else {
            return subsearch + mp + 1;
        }

    }
}