function printNumberInInterval(b: number ) {
  const anyfunc = (n:number) => {
    console.log(n);
  };

  let n = 1;
  let timerId = setInterval(() => {
    anyfunc(n);

    if(n == 10) {        
      clearInterval(timerId);

    }
    n++;

  }
  , 1000);
}
export default printNumberInInterval;
