function pickingNumbers(a) {
  const sorted = a.sort((a,b) => a-b)
  let count = []
  let i = 0
  let j = 1;
  let dif = Math.abs(sorted[i]-sorted[j])
  for (i; i < sorted.length; i++) {
    if(dif <= 1) {
      count[i] = 1;
      while (dif <= 1) {
        j++;
        count++
      }
    }
  }
  return count;
}

console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));