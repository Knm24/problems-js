// Update it as much as you want, just don't change the name



class Figure {
    calcArea(): void {
        return console.log('This is figure');
    }
}

 export class Circle extends Figure{
    radius: number;
    constructor(radius: number){
        super();
        this.radius = radius;
        
    }
    calcArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Update it as much as you want, just don't change the name
export class Rectangle extends Figure{
    width: number;
    height: number;

    constructor(width: number , height: number){
        super();
        this.width = width;
        this.height = height;
        
    }

    calcArea(): number {
        return this.width * this.height;
    }
}

// Update it as much as you want, just don't change the name
export function sumOfAllAreas(...arr: (Circle | Rectangle)[]) {
    let sum:number = 0;

    for (const iterator of arr) {
        sum += iterator.calcArea();
    }
    return sum;
}
