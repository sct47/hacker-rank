function angryProfessor(k, a) {
  let count = 0;
  a.forEach(x => {
    if (x <= 0) {
      count++;
    }
  })
  return count >= k ? "NO" : "YES";
}