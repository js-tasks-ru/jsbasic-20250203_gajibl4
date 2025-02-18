function getMinMax(str) {
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  let arr = str.split(' ').map(item => Number(item)).filter(item => isFinite(item)).sort(compareNumeric);
  return {
    min: arr[0],
    max: arr[arr.length - 1]
  }
}