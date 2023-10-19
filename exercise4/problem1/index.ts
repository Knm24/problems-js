
interface Person {
    name: string;
    age: number;    
    compareAge: Function;
}

class Person {

    constructor(name : string, age: number){
        this.name = name;
        this.age = age;
        this.compareAge = function (instPerson: Person): string {

            let str:string = instPerson.name;

            if(this.age < instPerson.age) 
                str += ` is older than me.`;            
            else if(this.age == instPerson.age)  
                str += ` is the same age as me.`;            
            else 
                str += ` is younger than me.`;       
            
            return str;
        };
    }

    


}

export default Person;
