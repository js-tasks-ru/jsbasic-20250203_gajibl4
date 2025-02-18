function showSalary(users, age) {
  let arr = users.filter(item => item.age <= age);
  let result = [];
  arr.forEach(user => {
    result.push(`${user.name}, ${user.balance}`);
  });
  return result.join('\n');
}