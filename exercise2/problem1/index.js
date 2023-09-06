function arrayOfMultiples(num, len) {
  let newArr = [];
  let counter = 0;
  while (len > 0) {   
    let bb= num *( counter+1);
    newArr.push(bb);
    counter++;
    len--;
  }
return newArr;
}

module.exports = arrayOfMultiples;
