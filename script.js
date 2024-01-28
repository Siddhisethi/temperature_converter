document.getElementById('convertBtn').addEventListener('click', function () {
    const inputValue = parseFloat(document.getElementById('temperatureInput').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const result = convertTemperature(inputValue, fromUnit, toUnit);
    document.getElementById('result').textContent = `${inputValue} ${fromUnit} is ${result.toFixed(2)} ${toUnit}`;
});

function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
        return (value * 9/5) + 32;
    } else if (fromUnit === 'Celsius' && toUnit === 'Kelvin') {
        return value + 273.15;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
        return (value - 32) * 5/9;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
        return (value - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Celsius') {
        return value - 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
        return (value - 273.15) * 9/5 + 32;
    } else {
        return value;
    }
}
