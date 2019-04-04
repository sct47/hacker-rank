function sockMerchant(n, ar) {
  const colours = ar.reduce(function(obj, item) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {})
  return Object.values(colours).map(colour => Math.floor(colour/2)).reduce((a,b) => a+b);
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))

