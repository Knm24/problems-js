function move() {
  let strArr = arguments[0].split(""); 
  const newStr = strArr.map((s) => ( (s == s) ?  String.fromCharCode(Number(s.charCodeAt())  + 1) : '' + s ) ).join('');


  return newStr.trim();
}

module.exports = move;
