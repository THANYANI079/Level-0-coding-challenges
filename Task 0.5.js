function triangleArea(a, b, c) {
    var input = (a + b + c) / 2;
    let area = Math.sqrt(input * (input - a) * (input - b) * (input - c));
    return area;
}
 
console.log(triangleArea(2, 4, 3.5));
