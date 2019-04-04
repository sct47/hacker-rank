function dayOfProgrammer(year) {
  if (year === 1918) {
    // special case
    return '26.09.1918';
  }
  if (year < 1918) {
    if (year % 4 === 0) {
      // leap year
      return `12.09.${year}`;
    }
    return `13.09.${year}`
  }
  if (year > 1918) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      // leap year
      return `12.09.${year}`
    }
    return `13.09.${year}`
  }
}