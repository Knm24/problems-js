
function log(n) {
  console.log(n);   
  if(n == 10) {
    console.log('fix clear ten');

    clearInterval(timerId);
    
  }
}

function printNumberInInterval(log) {
  let n = 1;
  let timerId = setInterval(() => log(n++), 1000);
}


export default printNumberInInterval;
