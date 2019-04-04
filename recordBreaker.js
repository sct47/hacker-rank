function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let maxCount = 0;
  let minCount = 0;
  scores.forEach(function (score) {
    if (score > max) {
      maxCount++;
      max = score;
    }
    if (score < min) {
      minCount++;
      min = score;
    }
  })
  return [maxCount, minCount];
}