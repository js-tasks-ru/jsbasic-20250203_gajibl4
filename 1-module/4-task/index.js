function checkSpam(str) {
  let search_string = str.toLowerCase();
  if (search_string.indexOf('1xbet') != -1 || search_string.indexOf('xxx') != -1) {
    return true;
  } else {
    return false;
  }
}