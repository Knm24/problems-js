function sortIt() {

  let newArr = arguments[0];
  let tempPivot = [newArr[0]];
  let leftArr = [];
  let rightArr = [];
  
  if (newArr.length < 2) return newArr;
  
      for (let index = 1; index < newArr.length; index++) {
        let element;
        if(typeof newArr[index] == Array )
          element = newArr[index][0];
        else
          element = newArr[index];

          //console.log('element:' + element);
          if (tempPivot > element) {
  
              leftArr.push(element);
  
          } else {
              rightArr.push(element);
  
          }
  
      }
      return [...sortIt(leftArr), ...tempPivot, ...sortIt(rightArr)]
    }



 module.exports = sortIt;

