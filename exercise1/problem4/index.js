function makeTitleCase() {
  let strArr = arguments[0].split(" "); 

  const newStr = strArr.map((s) => ( (s.length == 1) ? s[0].toUpperCase() : s[0].toUpperCase() + s.slice(1 - s.length)) );
  return newStr.join(' ');
}

module.exports = makeTitleCase;
