function insertWhitespace() {
  let strArr = arguments[0].split(""); 
  const newStr = strArr.map((s) => ( (s == s.toUpperCase()) ? ' ' + s : '' + s ) ).join('');

 
  if(arguments[0] ==  newStr)
    return null
  else
    return newStr;
}

module.exports = insertWhitespace;
