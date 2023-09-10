function duplicateNums(object) {
let newArr = Object.values(object);
let findArr = [];
  for (const key in object) {
      let elementArray = object[key];
      
let tt = object.indexOf(elementArray);   
newArr[tt] = null;
let yy = newArr.indexOf(elementArray);  

if(yy !== -1)
{


  if(findArr.indexOf(elementArray) === -1)
  findArr.push(elementArray);
}

  }
  return findArr.sort(function(y, v){return y - v});
}

module.exports = duplicateNums;
