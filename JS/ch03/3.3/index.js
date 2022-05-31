const { odd, even } = require('./var');
const checkOddOrEven = require('./func');

function checkStringOddOrEnev(str) {
    if (str.length % 2) {   // 홀수면
        return odd;
    }
    return even;
};

console.log(checkOddOrEven(10));
console.log(checkStringOddOrEnev('hello'));