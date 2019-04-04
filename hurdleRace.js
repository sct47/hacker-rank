function hurdleRace(k, height) {
  let potion = 0;
  height.sort((a, b) => b - a);
  if (k >= height[0]) {
    return 0
  }
  potion = height[0]-k
  return potion
}