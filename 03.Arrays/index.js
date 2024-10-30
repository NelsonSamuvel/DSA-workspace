//Custom array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  //1.way
  //   shift() {
  //     const firstVal = this.data[0];
  //     delete this.data[0];
  //     const temp = this.data;
  //     const newKeys = Object.keys(this.data);
  //     this.data = {};
  //     for (let i = 0; i < newKeys.length; i++) {
  //       this.data[newKeys[i] - 1] = temp[newKeys[i]];
  //     }
  //     this.length--;
  //     return firstVal;
  //   }

  //2.way
  shift() {
    const firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return firstItem;
  }

  unshift(value) {
    const temp = this.data;
    this.data = {};
    this.data[0] = value;
    for (let i = 1; i < this.length + 1; i++) {
      this.data[i] = temp[i - 1];
    }
    this.length++;
    return value;
  }

  deleteByIndex(index) {
    const deleteItem = this.data[index];
    if (!deleteItem) {
      console.log("Item Not found");
    } else {
      for (let i = index; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
    return this.data;
  }

  getValue(index) {
    return index < this.length ? this.data[index] : "Not found";
  }
}

const arr = new MyArray();
arr.push(1);
arr.push("nelson");
arr.push(true);
arr.push(null);
console.log(arr);

arr.deleteByIndex(1);
arr.deleteByIndex(0);

console.log(arr);
