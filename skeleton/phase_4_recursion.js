function range(start, end) {
    if (start === end) {
        return [start]
    }
    let arr = [start];
    // console.log(arr)
    return arr.concat(range(start + 1, end))

}

function sumRec(arr) {
    if (arr.length === 1) return arr[0];
    let sum = arr[0];
    return sum + sumRec(arr.slice(1, arr.length+1))
}

function exponent1(base, exp) {
    if (exp === 0) return 1;
    return base * exponent1(base, exp-1);
}

function exponent2(base, exp) {
    if (exp === 0) return 1;
    if (exp === 1) return base;
    if (exp % 2 === 0) {
        return exponent2(base, exp / 2) ** 2
    }
    else {
        return base * (exponent2(base, (exp - 1) / 2) ** 2)
    }
}

function fibonacci(n) {
    if (n === 0 || n === 1) return [1]
    if (n===2) return [1, 1]

    return fibonacci(n - 1).concat((fibonacci(n - 1)[fibonacci(n - 1).length - 1] + fibonacci(n - 1)[fibonacci(n - 1).length -2]))

}

function deepDup(arr) {
    if (arr.length === 1) return arr
    let doop = [];
    arr.forEach (el => {
    if (el instanceof Array) {
        doop.concat(deepDup(el))
    }    
    else {
        doop.push(el)
    }
    })
    return doop
}