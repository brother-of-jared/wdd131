// for Footer
const currentyear = document.querySelector("#currentyear");
const today = new Date();

currentyear.innerHTML = `&copy; <span id="currentyear">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = document.lastModified;

// for calculating wind chill
const temp =  31 // Celsius 
const windSpeed = 2 // m/s

function calculateWindChill(temp, windSpeed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

function getWindChill(temp, windSpeed) {
  // Convert m/s to km/h
  const windKmh = windSpeed * 3.6;

  // Check valid conditions
  if (temp <= 10 && windKmh > 4.8) {
    return Math.round(calculateWindChill(temp, windSpeed) * 10) / 10; // Round the value to one decimal place
  } else {
    return "N/A";
  }
}

console.log(getWindChill(temp, windSpeed)); // "N/A"


// Display wind chill value
const windChillValue = getWindChill(temp, windSpeed);
document.getElementById("windChill").textContent = windChillValue === "N/A" ? "N/A" : `${windChillValue} °C`;