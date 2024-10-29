const nums = [1, 2, 3, 4, 5, 6];

const getPairs = (nums) => {
  //O(n^2)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(`Pairs: ${nums[i]} ${nums[j]}`);
    }
  }

  for (let k = 0; k < nums.length; k++) {
    console.log(nums[k]);
  }
};

getPairs(nums);
