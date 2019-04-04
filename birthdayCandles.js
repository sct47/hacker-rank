function birthdayCakeCandles(ar) {
  ar.sort((a, b) => b - a);
  let count = 0;
  let i = 0;
  while (ar[0] === ar[i]) {
    count++;
    i++;
  }
  return count;
}