function countingValleys(n, s) {
  let level = 0;
  let valleys = 0;
  let arr = s.split('');
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === 'U') {
  //     level++;
  //     if(level === 0) {
  //       valleys++;
  //     }
  //   } else {
  //     level--;
  //   }
  // }
  arr.forEach(function(x) {
    if (x === 'U') {
      level++;
      if (level === 0) {
        valleys++
      }
    } else {
      level--;
    }
  })
  return valleys;
}

console.log(countingValleys(8, 'DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD'));
