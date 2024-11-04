# Data structures

## What is Data structure?

Data structure is a specific way of organizing, storing and accessing the data.

## Algorithm

A step by step solution to solve the problem

### Example

```javascript
const students = ["John", "Nick", "Tom", "Peter", "Clint"];

const findStudent = (students, studentName) => {
  let result = "";
  for (const student of students) {
    if (student.toLowerCase() === studentName.toLowerCase()) {
      result = student;
    }
  }

  return result;
};

const res = findStudent(students, "peter");
if (res) {
  console.log("Student Name: " + res);
} else {
  console.log("No student found");
}
```

In this code, **array** is a data structure and **findStudent function** is an algorithm

## Big O

Big O helps us to understand how much time the algorithm takes to solve or how much memory that it needed to handle the data.

### O(n)

O(n) describes the linear relationship between size of the input and the time it takes to complete or the space it requires.

#### Example

```javascript
const groceries = ["Milk", "Bread", "Biscuits", "Flour"];

const findItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log("Item Found: " + item);
    }
  }

  for (let j = 0; j < groceries.length; j++) {
    if (groceries[j] === item) {
      console.log("Item Found: " + item);
    }
  }
};

findItem("Bread");
```

- In this code, the for loops depend on the groceries array
- Whenever **the size of the array** increases, the execution time that the **for loops** takes also increases
- We used two for loops. For each of the loop,It takes n times to complete the loop
- That means, We got 2n since we have two for loops
- In Big O, We drop the constants
- So, the time complexity of this code is O(n) not O(2n).

### O(1)

O(1) also refers to constant time. The execution time of the algorithm remains constant regardless of the input size.

#### Example

```javascript
const nums = [1, 2, 3, 4, 5, 6];

const findNum = (nums, index) => nums[index];
console.log(findNum(nums, 2));
```

- In this code, **findNum()** will always return the number at a specific index, even if the size of the array increases.
- So the time takes to execute remains constant.

### O(n^2)

It refers to the quadratic time complexity. The time and space required by algorithm is proportional to square of the input size.
Eg: For each element in the input the algorithm performs an operation. That results in a nested loop.
As input size increases, the number of operations for each item also increases.

#### Example

```javascript
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
```

- In this code, we used nested for loop and a single for loop.
- nested for loop takes O(n^2) and single for loop takes O(n) which results in O(n^2 + n).
- In case of Big O, we ignore non dominant term.
- The result is O(n^2) which is a dominant term and we ignored O(n).

### O(log n)

It refers to the time complexity that increases logarithmically relative to the input size. That means, as input size increases, the execution time also increases but slowly.

#### Example

```javascript
[1, 2, 3, 4, 5, 6, 7, 8];

//using divide and conquer

1, 2, 3, 4 | 5, 6, 7, 8;
1, 2 | 3, 4;
1, 2;
```

In this example, as the input size increases, we are only checking half of the size of array.
Later, we learn about divide and conquer and how O(log n) works.

## Arrays

Array is a data structure that stores collection of elements. Those elements can be accessed by using the index.

## Linked Lists

- It is a linear data structure where elements are called `nodes`, not stored in memory consecutively.
- Each node has a element and reference to the next node
- First node is called head and the last node is called tail
