function camelize(str) {
  let arr = str.split('-');
  let result = [];
    arr.forEach(function(item, index) {
    if (item){
      if (index > 0) {
        new_str = item[0].toUpperCase() + item.slice(1);
      } else {
        new_str = item;
      }
      result.push(new_str);
    }
  })
  return result.join('');
}