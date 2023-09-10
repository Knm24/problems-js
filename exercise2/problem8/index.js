function isEqual(oneObj, twoObj) {
  

  let isEq = false;
  
  if (Object.keys(oneObj).length === 0 && Object.keys(twoObj).length === 0) 
  return true;


  
  if (typeof oneObj === 'string' && typeof twoObj === 'string') {
      

      if(oneObj === twoObj)
      eq = true;
      else
      eq = false;
  }

  if (typeof oneObj === 'number' && typeof twoObj === 'number') {
      

      if(oneObj === twoObj)
      eq = true;
      else
      eq = false;
  }


  if (Array.isArray(oneObj) && Array.isArray(twoObj))
  {

      if(JSON.stringify(oneObj) === JSON.stringify(twoObj)
      )
      {

          return true;
      }
      else
      {

          return false;
      }

  }

  for (const key in oneObj) {

    const element = oneObj[key];
    const element2 = twoObj[key];

  




    if (typeof oneObj[key] == "object" && typeof twoObj[key] == "object")
    {
      return isEqual(oneObj[key], twoObj[key]);

    }
    else
    {
      
    if(element === element2)
    {
      isEq = true;

    }
    else
    {
      isEq = false;
      return false;
    }
    }
 
}
 return isEq;
}


module.exports = isEqual;
