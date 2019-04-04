function divisibleSumPairs(n, k, ar) {
  let count = 0;
  let i = 0;
  let j = 0;
  for (i in ar) {
    for (j in ar) {
      // If its bigger than the current loop count and 
      // the i, j pair divided by k has 0 remainder, +1 count.
      if (i < j && (ar[i] + ar[j]) % k == 0) {
        count++;
      }
    }
  }
  return count;
}