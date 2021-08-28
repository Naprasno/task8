let a = 'Text abc'

function reverseStr(str) {
    let newStr = '', i;
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}
console.log(reverseStr(a));