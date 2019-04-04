function bonAppetit(bill, k, b) {
  bill.splice(k, 1)
  let split = bill.reduce((a,b) => a+b)/2;
  if (split === b) {
    return "Bon Appetit"
  }
  return b-split
}

console.log(bonAppetit([3, 10, 2, 9], 1, 7))