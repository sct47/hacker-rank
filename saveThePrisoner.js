function saveThePrisoner(n, m, s) {
  let count = s + m - 1;
  if (count > n) {
    if (count % n == 0) {
      return n;
    }
    return count % n;
  }
  return count;
}