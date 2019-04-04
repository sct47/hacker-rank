function catAndMouse(x, y, z) {
  let catOne = Math.abs(z - x);
  let catTwo = Math.abs(z - y);
  if (catOne === catTwo) {
    return "Mouse C";
  };
  if (catOne < catTwo) {
    return "Cat A";
  }
  return "Cat B"
}

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));