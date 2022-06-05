import { shape } from './shape';

export class circle extends shape {
    constructor(x: number, y: number, private _radius: number){
        super(x, y);
    }
    get raduis(): number{
        return this._radius;
    }
    set radius(value: number){
        this._radius = value;
    }

    getInfo(): string{
        return super.getInfo()+ `, radius=${this._radius}`;
    }
}

