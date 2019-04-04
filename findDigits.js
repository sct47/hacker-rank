function findDigits(n) {
  let count = 0;
  const digits = n.toString().split('');
  digits.forEach(x => {
    if (n % x === 0) {
      count++;
    }
  })
  return count;
}