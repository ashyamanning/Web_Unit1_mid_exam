// Write a method that doubles each element in an array.

function doubler(array) {
    return array.map(el =>{
        return el*2
    })
}

// Write a method that returns the factors of a number in ascending order.
// Factors are numbers that divide evenly into a number.

function factors(num) {
    let fact = []
    for(i=1; i <= num; i++){
        if(num %i === 0){
            fact.push(i)
        }
    }
    return fact
}

// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements.

function median(arr) {
    arr.sort();
    if (arr.length % 2 === 0) {
        return (arr[(arr.length/2)-1]+arr[arr.length/2])/2
    } else {
        return arr[(Math.floor(arr.length/2))]
    }
}

// Write a method that returns the product of all numbers in an array.

function product(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr.reduce((prod, el)=> {
            return prod *= el
        })
    }
}


// Write a method that returns the largest number in an array.

function largest(arr) {
    let largest = arr[0];
    arr.forEach((el) => {
        if (largest < el) {
            largest = el;
        }
    })
    return largest;
}

// Write a method called 'and' that takes in two arguments. It should check
// return whether or not both arguments have a truthy value.

function and(arg1, arg2) {
    if (arg1 === arg2) {
        return true
    } else {
        return false
    }
}

// Write a function that takes in an array and a target. Return whether or
// not the array contains the target

function includes(arr, target) {
    let found = false;
    arr.forEach((el) => {
        if (el === target) {
            return found = true;
        }
    })
    return found;
}

// Write a function that removes all the vowels from a string.

function disemvowel(str) {
    let withoutVowel = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "a" && str[i] !=="e" && str[i] !=="i" && str[i] != "o" && str[i] !== "u") {
            withoutVowel += str[i];
        }
    }
    return withoutVowel;
}

module.exports = { doubler, factors, median, product, largest, and, includes, disemvowel };
