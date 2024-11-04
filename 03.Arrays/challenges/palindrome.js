const checkPalindrome = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr.toLowerCase() === str.toLowerCase();
};

const isPalin1 = checkPalindrome("Nelson");
checkPalindrome("ABBA");

if (isPalin1) {
  console.log("Palindrome");
} else {
  console.log("Not a palindrome");
}
