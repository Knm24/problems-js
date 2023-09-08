function isEqual(oneObj, twoObj) {

  let isEqual = false;


  for (const key in oneObj) {
  ww = 'tt'
  len = twoObj[key].length;

    const element = oneObj[key];

    if(twoObj[key] == element)
    isEqual = true;
    else
    isEqual = false;
}
 return isEqual;
}

module.exports = isEqual;
