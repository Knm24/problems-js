function duplicateNums(object) {
let newArr = [];
  for (const key in object) {
      let elementArray = object[key];
      
      for (let index = 0; index < elementArray.length; index++) {
        const find = elementArray[index];
        if(element.indexOf !== -1) {
          newArr.push(find);
        }
      }
  }
  return newArr;
}

module.exports = duplicateNums;
