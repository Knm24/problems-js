function printNumberInInterval(b: number ) {

  async function anyfunc (n:number) : Promise<void> {
    await console.log(n);
  };

  let n = 1;
  let timerId = setInterval(async () => {
    await anyfunc(n);

    if(n == b) {        
      clearInterval(timerId);
    }
    n++;

  }
  , 1000);
}
export default printNumberInInterval;
