import { odd, even } from './var'
import checkOddOrEven from './func'

const checkStringOddOrEven = (str: string) => {
    if (str.length % 2) {
        return odd;
    }
    return even;
}

console.log(checkOddOrEven(10))
console.log(checkStringOddOrEven('hello'))