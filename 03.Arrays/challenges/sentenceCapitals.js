const capitalize = (str) => {
  const strArr = str.toLowerCase().split(" ");
  let res = "";
  for (const word of strArr) {
    res += word.charAt(0).toUpperCase() + word.slice(1);
    res += " ";
  }
  return res.trim();
};

console.log(capitalize("i am a frontend developer"));
