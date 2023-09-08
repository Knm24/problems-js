function mapping(arr) {
  let newObj = {};
  for(i = 0; i<=arr.length-1; i++){
    newObj[arr[i].toLowerCase()] = arr[i].toUpperCase();
  }
  return newObj;
}

module.exports = mapping;
