//Time complexity - O(n^2) because for every element in array it goes through looping

const twoSum = (arr, target) => {
  let res = [-1, -1];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        res = [i, j];
      }
    }
  }
  return res;
};

console.log(twoSum([2, 7, 6, 15], 21));
