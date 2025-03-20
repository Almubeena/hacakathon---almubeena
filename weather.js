const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeather API Key

async function getWeather() {
  const city = document.getElementById('city').value;
  if (!city) return alert('Please enter a city name.');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();

    const weatherHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Weather: ${data.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon" />
    `;
    document.getElementById('weather-result').innerHTML = weatherHTML;
  } catch (error) {
    document.getElementById('weather-result').innerHTML = '<p>Error: ' + error.message + '</p>';
  }
}
