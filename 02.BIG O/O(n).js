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
