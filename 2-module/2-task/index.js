function isEmpty(obj) {
  let number = 0;
  for (key in obj){
    number += 1;
  }
  if (number != 0){
    return false;
  }
  return true;
}