function timeConversion(s) {
  if (s === "12:00:00AM") {
    return "00:00:00"
  } else if (s === "12:00:00PM") {
    return "12:00:00"
  } else {
    let split = s.split('');
    let digits = s.split(/:/);
    let int = parseFloat(digits);
    if (digits[0] === "12" && split[split.length - 2] === "A") {
      digits[0] = "00";
      let chip = digits.join(":");
      let chop = chip.split('');
      chop.splice((chop.length - 2), 2);
      return chop.join('');
    } else if (digits[0] === "12" && split[split.length - 2] === "P") {
      split.splice((split.length - 2), 2);
      return split.join('');
    } else if (split[split.length - 2] === "P") {
      int += 12
      digits[0] = int;
      let chip = digits.join(":");
      let chop = chip.split('');
      chop.splice((chop.length - 2), 2);
      return chop.join('');
    } else {
      split.splice((split.length - 2), 2);
      return split.join('');
      }
    }
  }
