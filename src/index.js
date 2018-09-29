module.exports = function solveEquation(equation) {
let arr=equation.match(/[-+]?[" "]?\d{1,}/g);
let a = +arr[0];
let b = +(arr[2][0] + arr[2].substring(2));
let c = +(arr[3][0] + arr[3].substring(2));
let d = b*b - 4*a*c;
let res = [(Math.round(-b - Math.sqrt(d)) / (2 * a)), Math.round((-b + Math.sqrt(d)) / (2 * a))];
return res.sort((a,b) => {return a - b});
}

