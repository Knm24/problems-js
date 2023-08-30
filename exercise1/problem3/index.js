function pentagonal() {

  let num = arguments[0]; 

let outside = 5;
let inner = 1;
let penta;

if(num == 1)
return 1;

for (i = 1; i <= num; i++) 
{   
  penta =  (i*(outside*i-outside) /2)+inner;   
}

return penta;

}

module.exports = pentagonal;
