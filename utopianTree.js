function utopianTree(n) {
  let cycle = 0;
  let height = 1;
  if (n === 0) {
    return height;
  }
  while (cycle < n) {
    height *= 2;
    height++;
    cycle += 2;
  }
  if (n % 2 !== 0) {
    height--;
  }
  return height;
}