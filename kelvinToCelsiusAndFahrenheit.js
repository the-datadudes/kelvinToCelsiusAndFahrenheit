// Setting a constant variable to represent a kelvin temperature.
const kelvin = 293;

// Setting a variable to represent the same temperature in celsius.
let celsius = kelvin - 273;
console.log(celsius);

// Using a let variable to represent the same temperature in fahrenheit.
let fahrenheit = celsius * (9/5) + 32;
console.log(fahrenheit);

// Rounding the decimal down to the nearest whole number for ease of use.
fahrenheit = Math.floor(fahrenheit);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)


// Convert this temperature to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);