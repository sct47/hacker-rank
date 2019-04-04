function pickingNumbers(a) {
  const counts = a.reduce(function(obj, item) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj
  }, {})
  console.log(counts)
  let max = 0;
  let keys = Object.keys(counts).map(key => parseInt(key, 10))
  console.log(keys)
  for (let i = 0; i < Object.keys(counts).length; i++) {
    if (keys[i]+1 === keys[i+1]) {
      if (counts[Object.keys(counts)[i]] + counts[Object.keys(counts)[i+1]] > max) {
        max = counts[Object.keys(counts)[i]] + counts[Object.keys(counts)[i+1]];
      }
    }
    if (Object.values(counts).reduce((a,b) => a > b ? a : b) > max) {
      max = Object.values(counts).reduce((a,b) => a > b ? a : b)
    }
  }
  return max
}