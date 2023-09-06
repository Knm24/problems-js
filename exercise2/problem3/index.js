function numbersSum(newArr){
  let sum = 0;
  for(i = 0; i< newArr.length; i++) {
    
    let typ = typeof newArr[i];
      if (a = (typ === 'number'))
      sum = sum + newArr[i];
  
    
  }
  return sum;
}

module.exports = numbersSum;