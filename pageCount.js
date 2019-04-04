function pageCount(n, p) {
  let end = 1;
  let start = Math.floor(p / 2);
  if (n % 2 === 0 && (n - p) === 1) {
    end = Math.floor((n - p) / 2) + 1;
  } else {
    end = Math.floor((n - p) / 2);
  }
  return start < end ? start : end;
}

console.log(pageCount(6, 5))
