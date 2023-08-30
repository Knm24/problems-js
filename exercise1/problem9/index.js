function isDisarium() {

  let newArr = [];
  let num = arguments[0]; 
  let kaldyk; 
  let counter = 0;

  while (num > 0) 
  {   
     kaldyk = (num%10);
     num = Math.trunc(num/10);
     newArr.push(kaldyk);
    counter++;

  }
newArr.reverse();
newArr1 = newArr.map((n, index) => Math.pow(n, index+1));
let summator = 0;
newArr2 = newArr1.map((n, index) => summator =  summator + n);

if(summator == arguments[0])
return true;
else
return false;



}

module.exports = isDisarium;
