function longestTime() 
{
  

  let hours = arguments[0]/3600;
  let min = arguments[1]/60;
  let sec = arguments[2];

  return Math.max(hours, min, sec);

}



module.exports = longestTime;

/*
npm test ./exercise1/problem8/..
git branch -M main
git add .
git commit -m "add: code ex8 \sec"
git push -u origin main
*/
