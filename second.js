var Traineelol = /** @class */ (function () {
    function Traineelol(OtID, Oname) {
        this.tID = OtID;
        this.name = Oname;
    }
    Object.defineProperty(Traineelol.prototype, "_tID", {
        get: function () {
            return this.tID;
        },
        set: function (value) {
            this._tID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Traineelol.prototype, "_name", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Traineelol;
}());
var myTraineelol = new Traineelol("fi990", "ramo ta7awy");
console.log(myTraineelol._tID);
console.log(myTraineelol._name);
