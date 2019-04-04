function birthday(s, d, m) {
  let options = 0;
  let checkArr = [];
  let test = [];
  if (s.length === m) {
    if (s.reduce((a,b) => a+b) === d) {
      return options = 1;
    }
  }
  for (let i = 0; i <= s.length - m; i++) {
    checkArr.push(s.slice(i, i + m));
  }
  checkArr.forEach(function (x) {
    test.push(x.reduce((a, b) => a + b));
  })
  test.forEach(function (x) {
    if (x === d) {
      options++;
    }
  })
  return options;
}