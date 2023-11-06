function add(x,y){
    return x+y;
}
const PI = 3.14;
const square = x=>x*x;

//(1)
//module.exports="hello" //here exports hello for total file
//(2)
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;
//(3)
module.exports = {
    pi: PI,
    powerTwo: square,
    Add: add
}