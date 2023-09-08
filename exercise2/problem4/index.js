function numInStr(newArr) {
  let strArr = [];
  for(i = 0; i< newArr.length; i++) {
    let typ =  newArr[i];
      if ( (b = typ.search(/\d/)) !== -1) 
      strArr.push(newArr[i]);    
  }
  return strArr;
}

module.exports = numInStr;