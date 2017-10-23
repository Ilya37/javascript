function brackets(str) {
  let newStr = '';
  for (i = 0; i < str.length; i++) {
    let count = str.toLowerCase().split(str[i].toLowerCase()).length - 1;
    if (count > 1) {
      newStr = newStr + ")";
    } else {
      newStr = newStr + "(";
    }
  }
  return newStr;
}

module.exports = {
  brackets: brackets
}
