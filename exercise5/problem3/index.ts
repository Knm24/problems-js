function printAsyncNumbers(b: number ) {

  async function anyfunc (n:number) : Promise<number> {
     
    let timems = n * 10000;
    //await console.log('timems:' + timems);


    await (setTimeout(():void => {}), timems);

    await console.log(n);
    return n;
  };

  let n = 1;
  
  let timerId = setInterval(async () => {
      let timems : number;
      timems = await anyfunc(n);
              console.log(timems);
    if(n == b) {        
      clearInterval(timerId);
    }
    n++;

  }
  ,  1000);
}

export default printAsyncNumbers;
