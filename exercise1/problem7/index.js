function isPrimitive() {
  /* There are 7 primitive data types:
 
   string
   number
   bigint
   boolean
   undefined
   symbol
   null
   */
 
   let parameter = arguments[0]; 
 
   const primitived = {
     string: "string",
     number: "number",
     bigint: "bigint",
     boolean: "boolean",
     undefined: "undefined",
     symbol: "symbol"
   };
 
 
   if(typeof parameter !== Object && parameter === null)
   return true;
 
   if(primitived[typeof parameter] == undefined)
   return false;
   else
   return true;
 
 
 }
 
 module.exports = isPrimitive;