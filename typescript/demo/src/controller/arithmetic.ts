class Arithmetic {
    a: number;
    b: number;
    constructor(x:number,y:number){
        this.a = x;
        this.b = y;
    }
    add(): number{
        return this.a + this.b;
    }
    subtract(): number{
        return this.a - this.b;
    }
    multiply(): number{
        return this.a * this.b;
    }
    divide(): number{
        return this.a / this.b;
    }
}

export default Arithmetic 