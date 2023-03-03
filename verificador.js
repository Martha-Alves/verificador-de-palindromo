function palindrome(str) {

   let reversedStr = ""
    
    

    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }

    str = str
    .split(" ")
    .join("")
    .toLowerCase()

    let myStr = reversedStr
      .split(" ")
      .join("")
      .toLowerCase()
    
    if (myStr === str) {
      return true
    } else {
      return false
    }

    
  // return str
}

console.log(palindrome("race CAR"));