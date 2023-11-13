async function printAsyncNumbers(b: number) {
  let i = 1;

  while (i <= b) {   
    await anyfunc(i);
    console.log(i); 
    i++;
  }

   function anyfunc(n: number) {
    let timems = n * 1000;
     return new Promise(resolve => setTimeout(resolve, timems));
  }

}


export default printAsyncNumbers;
