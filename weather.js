async function getWeather() {
  let city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  let apiKey = "138c9a46136b8599b9865364880d3a0d"; // 👉 Replace with your OpenWeatherMap API key
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    let response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    let data = await response.json();
    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temp: ${data.main.temp}°C</p>
      <p>☁️ Weather: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
