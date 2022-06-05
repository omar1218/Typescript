class Traineelol{
    private tID: string;
    private name: string;

    constructor(OtID: string, Oname:string){
        this.tID = OtID;
        this.name = Oname;

    }

    get _tID(): string {
        return this.tID;
    }

    set _tID(value: string){
        this._tID = value;
    }
    get _name(): string {
        return this.name;
    }

    set _name(value: string){
        this.name = value;
    }
}

let myTraineelol = new Traineelol("fi990", "ramo ta7awy");

console.log(myTraineelol._tID);
console.log(myTraineelol._name);