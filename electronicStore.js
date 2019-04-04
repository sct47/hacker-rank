function getMoneySpent(keyboards, drives, b) {
  keyboards.sort((a, b) => a - b);
  drives.sort((a, b) => a - b);
  if (keyboards[0] + drives[0] > b) {
    return -1;
  }
  let maxSpend = 0;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] > maxSpend && keyboards[i] + drives[j] <= b) {
        maxSpend = keyboards[i] + drives[j];
      }
    }
  }
  return maxSpend;
}