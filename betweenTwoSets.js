function getTotalX(a, b) {
  let test = [];
  let count = a[0];
  while (count <= b[b.length - 1]) {
    test.push(count);
    count += a[0];
  }
  a.forEach(x => {
    test = test.filter(e => e % x === 0);
  });
  b.forEach(x => {
    test = test.filter(e => x % e === 0);
  })
  return test.length;
}
