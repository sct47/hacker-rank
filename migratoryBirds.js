function migratoryBirds(arr) {
  let count = arr.reduce(function (obj, item) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {})
  return Object.keys(count).reduce((a, b) => count[a] >= count[b] ? a : b);
}

// sort instead:

// return Object.keys(count).sort((a,b) => count[b] - count[a])[0]