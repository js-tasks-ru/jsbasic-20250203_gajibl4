function filterRange(arr, a, b) {
  return arr.filter(item => {
    if (a <= item && item <= b){
      return true;
    }
  })
}