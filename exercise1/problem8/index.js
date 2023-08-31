function longestTime() 
{  
  let hours = arguments[0]*3600;
  let min = arguments[1]*60;
  let sec = arguments[2];
  
if (sec >= hours && sec >= min)
{
  return arguments[2];
}
else if(hours >= min && hours >= sec)
{
  return arguments[0];
}
else if (min >= sec && min >= hours)
{
  return arguments[1];
}
  
  return false;

}

module.exports = longestTime;

/*
npm test ./exercise1/problem8/..
git branch -M main
git add .
git commit -m "add: code ex8 \sec"
git push -u origin main
*/
