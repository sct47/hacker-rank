function jumpingOnClouds(c, k) {
  let i = 0;
  let energy = 100;
  while (i < c.length) {
    if (c[i] === 1) {
      energy -= 2
    }
    energy -=1
    i+=k;
  }
  return energy
}