//1st method
// const reverseNum = (num) => {
//   const strNum = num.toString();
//   let resStr = "";
//   for (let i = strNum.length - 1; i >= 0; i--) {
//     resStr += strNum[i];
//   }
//   return Number(resStr);
// };

// console.log(reverseNum(1234));
// console.log(reverseNum(4567));

//2nd method
const reverseNum1 = (num) => {
  let res = 0;
  let n = Math.abs(num);

  while (n > 0) {
    const rem = n % 10;
    res = res * 10 + rem;
    n = Math.floor(n / 10);
  }
  return num > 0 ? res : res * -1;
};
// console.log(reverseNum1(1234));
console.log(reverseNum1(-3214));
console.log(reverseNum1(-21));
