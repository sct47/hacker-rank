function gradingStudents(grades) {
  let sGrades = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      sGrades.push(grades[i]);
    } else if ((grades[i] + 2) % 5 === 0) {
      sGrades.push((grades[i] + 2));
    } else if ((grades[i] + 1) % 5 === 0) {
      sGrades.push((grades[i] + 1));
    } else {
      sGrades.push(grades[i]);
    }
  }
  return sGrades;
}


function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && grades[i] % 5 > 2) {
      while (grades[i] % 5 !== 0) {
        grades[i]++;
      }
    }
  }
}