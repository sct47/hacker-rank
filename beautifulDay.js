function beautifulDays(i, j, k) {
  let days = []
  let reverseDays = []
  let differences = []
  let beautiful = 0;
  let reverse = num => parseInt(num.toString().split('').reverse().join(''));
  for (let z = i; z <= j; z++) {
    days.push(z)
    reverseDays.push(reverse(z))
  }
  for (let i = 0; i < days.length; i++) {
    differences.push(Math.abs(days[i] - reverseDays[i]))
  }
  differences.forEach(x => {
    if (x % k === 0) {
      beautiful++;
    }
  })
  return beautiful;
}

console.log(beautifulDays(20, 23, 6))


function beautifulDays(i, j, k) {
  let days = 0;

  for (i; i <= j; i++) {
      let reversedInt = parseInt(i.toString().split('').reverse().join(''));
      
      if (Math.abs(i - reversedInt) % k === 0) {
          days++;
      }
  }
  return days
}