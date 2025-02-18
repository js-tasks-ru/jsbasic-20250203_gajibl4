function sumSalary(salaries) {
  let result = 0;
  for (name in salaries){
    if (isFinite(salaries[name]) == true){
      result += +salaries[name];
    }
  }
  return result;
}