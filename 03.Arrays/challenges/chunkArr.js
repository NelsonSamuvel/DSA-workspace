//Time complexity of this algorithm is O(n) because the time taken for execution is
//directly proportional to the input size

//Method-1

// const chunkArr = (nums, chunks) => {
//   let indexCount = 0;
//   let res = [];
//   let chunkArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     chunkArr.push(nums[i]);
//     indexCount++;
//     if (indexCount === chunks) {
//       res.push(chunkArr);
//       chunkArr = [];
//       indexCount = 0;
//     }
//   }
//   return res;
// };

//Method 2
// const chunkArr2 = (nums, chunks) => {
//   let res = [];
//   let chunkArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     chunkArr.push(nums[i]);
//     if ((i + 1) % chunks === 0) {
//       res.push(chunkArr);
//       chunkArr = [];
//     }
//   }
//   return res;
// };

//Method 3
const chunkArr3 = (nums, chunks) => {
  const res = [];
  let index = 0;
  while (index < nums.length) {
    const chunk = nums.slice(index, index + chunks);
    if (chunk.length === chunks) {
      res.push(chunk);
      index += chunks;
    } else {
      break;
    }
  }
  return res;
};

console.log(chunkArr3([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
