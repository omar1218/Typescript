"use strict";
exports.__esModule = true;
var shape_1 = require("./shape");
var circle_1 = require("./circle");
var myshape = new shape_1.shape(12, 53);
console.log(myshape.getInfo());
var mycircle = new circle_1.circle(12, 53, 1);
console.log(mycircle.getInfo());
