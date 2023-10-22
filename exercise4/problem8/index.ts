class Calculator {

    private currValue : number;

    constructor(initValue : number){
        this.currValue = initValue;
    }

    add(paramValue: number) : number
    {
        return this.currValue = (Number(paramValue) + Number(this.currValue));
    }

    subtract(paramValue: number) : number
    {
        return this.currValue = (Number(this.currValue) - Number(paramValue));
    }

    multiply(paramValue: number) : number
    {
        return this.currValue = (Number(this.currValue) * Number(paramValue));
    }

    divide(paramValue: number) : unknown
    {        
        try {
            if(paramValue == 0)
            {
                throw new Error("err divide");
            }

            this.currValue = (Number(this.currValue) / Number(paramValue));
            
        } catch (e : unknown) {

            console.log(`Error cannot delete (${paramValue})`);
        }

        return this.currValue;
    }

    logResult() : void
    {
        console.log(Number(this.currValue));
    }


}

export default Calculator;

