function kangaroo(x1, v1, x2, v2) {
  let count = 0;
  if (x2 > x1 && v2 >= v1) {
    return "NO";
  } else {
    while ((x1 !== x2) && (count < 10000)) {
      x1 += v1;
      x2 += v2;
      if (x1 === x2) {
        return "YES";
      }
      count++;
    }
    return "NO";
  }
}