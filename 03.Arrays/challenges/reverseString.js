const str = "Apple";
let res = "";

for (let i = str.length - 1; i >= 0; i--) {
  res += str.charAt(i);
}
console.log(`Original String: ${str}, Reversed String: ${res}`);
