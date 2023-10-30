class Sensor{
    constructor(car){
        this.car=car;
        this.rayCount=31
        this.rayLength=100;
        this.raySpread=Math.PI/4;

        this.rays=[];
    }

    update(){
        this.rays=[];
        for(let i=0;i<this.rayCount;i++){
            const angle=lerp(
                -this.raySpread,
                this.raySpread,
                i/(this.rayCount-1)
            );
            const ray={
                x:this.car.x,
                y:this.car.y,
                angle:this.car.angle+angle,
                distance:this.rayLength,
                hit:false
            };
            this.rays.push(ray);
        }
        this.#castRays();
    }
}