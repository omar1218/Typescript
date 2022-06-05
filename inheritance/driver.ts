import {shape} from './shape';
import {circle} from './circle';


let myshape = new shape(12, 53);
console.log(myshape.getInfo());

let mycircle = new circle(12, 53, 1);
console.log(mycircle.getInfo());