const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertBtn = document.getElementById("convertBtn");
const result = document.querySelector(".result");

convertBtn.addEventListener("click", () => {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    
    if (!isNaN(celsiusValue)) {
        const fahrenheitResult = (celsiusValue * 9/5) + 32;
        result.textContent = `${celsiusValue}°C is equal to ${fahrenheitResult.toFixed(2)}°F`;
    } else if (!isNaN(fahrenheitValue)) {
        const celsiusResult = (fahrenheitValue - 32) * 5/9;
        result.textContent = `${fahrenheitValue}°F is equal to ${celsiusResult.toFixed(2)}°C`;
    } else {
        result.textContent = "Please enter a valid temperature.";
    }
});
