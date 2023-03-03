function palindrome(str) {

    let reversedStr = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    str = str
        .split(/\W*/)
        .join("")
        .replace('_', '')
        .toLowerCase()

    let myStr = reversedStr
        .split(/\W*/)
        .join("")
        .replace('_', '')
        .toLowerCase()

    if (myStr === str) {
        return true
    } else {
        return false
    }

}





console.log(palindrome("race CAR"));