var celsiusToFahrenheit = celsius => celsius * 9/5 + 32;

var fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;



console.log(celsiusToFahrenheit(20));   
console.log(fahrenheitToCelsius(68));