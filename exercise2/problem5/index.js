function getBudgets(arr) {
let sum = 0;
  for (i = 0; i<= arr.length-1; i++) {
    sum = sum + arr[i]['budget'];
  }
  return sum;
}




module.exports = getBudgets;
