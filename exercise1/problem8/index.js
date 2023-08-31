function longestTime() 
{
  

  let hours = arguments[0]/3600;
  let min = arguments[1]/60;
  let sec = arguments[2];

  return Math.max(hours, min, sec);

}



// module.exports = longestTime;
