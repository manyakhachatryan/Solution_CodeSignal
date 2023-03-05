function solution(inputString) {
    let str = inputString;
    while (str.includes(")")) {
        let end = str.indexOf(")")
        let start = str.lastIndexOf("(", end)
        let strSlice = str.slice(start + 1, end)
        let strReversed = strSlice.split("").reverse().join("");
        let newStr = str.slice(0, start) + strReversed + str.slice(end + 1, str.length)
        str = newStr
    }
    return str;
}

