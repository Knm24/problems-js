function numOfDigits(int) {
  // Your code

 let counter = 0;
 if(int < 0) int = Math.abs(int);
 if(int == 0) return 1;

 while (int > 0) 
 {
    int = Math.trunc(int / 10);
    counter = counter + 1;
 }

  return counter;
}

module.exports = numOfDigits;
