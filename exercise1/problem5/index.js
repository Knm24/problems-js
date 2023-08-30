function removeABC() {
  let strArr = arguments[0].split(""); 
  const newStr = strArr.map((s) => ( (s == 'a' ||  s == 'b' ||  s == 'c') ? '' : '' + s ) ).join('');

 
  if(arguments[0] ==  newStr)
    return null
  else
    return newStr;
}

module.exports = removeABC;
