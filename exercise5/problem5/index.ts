async function wait (ms: number) {setTimeout(() => {
         console.log("Delayed for second " + ms);
      }, ms);
   }

export default wait;
