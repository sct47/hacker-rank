function viralAdvertising(n) {
  let day = 0;
  let likes = 0;
  let shared = 5;
  let counter = 0
  while (day < n) {
    likes = Math.floor(shared/2)
    shared = likes*3
    counter += likes 
    day++;
  }
  return counter
}