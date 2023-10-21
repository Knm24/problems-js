// Update it as much as you want, just don't change the name



interface Figure {
    calcArea(): void     
}


 export class Circle implements Figure{
    radius: number;
    constructor(radius: number){
        this.radius = radius;
        
    }
    calcArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Update it as much as you want, just don't change the name
export class Rectangle implements Figure{
    width: number;
    height: number;

    constructor(width: number , height: number){
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
