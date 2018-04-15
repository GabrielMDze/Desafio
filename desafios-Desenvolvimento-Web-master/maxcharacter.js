function maxCharInString(str) {
    const strObj = {};

    for (let char of str) {
        if (strObj[char]) {
            strObj[char]++;
        } else {
            strObj[char] = 1;
        }
    }
    console.log(strObj);
}

var testCase = "arara"
var testCase2 = "socorram me subi no ônibus em marrocos"

maxCharInString(testCase);