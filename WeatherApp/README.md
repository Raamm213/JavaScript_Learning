🌦 Weather Forecast UI
A simple weather forecast web app that displays the hourly forecast for the next 8 time slots using OpenWeather's 5-day forecast API.

🚀 Features
Fetches weather data for a city from the OpenWeather API.

Dynamically displays 8 forecast cards (.smallcont) including:

Time (formatted)

Weather icon

Temperature (in °C)

📁 Project Structure
bash
Copy
Edit
📁 weather-app/
├── index.html # HTML layout with a `.hourly` container
├── style.css # Basic styles for .hourly and .smallcont
└── script.js # Fetches API data and dynamically renders forecast
🛠 Technologies Used
HTML

CSS

JavaScript (ES6+)

OpenWeather API

🧩 How It Works
User triggers display2(cityName) function.

The function fetches hourly forecast data for the given city.

The first 8 time entries from the response (list) are processed.

Each time entry is used to:

Create a .smallcont element with time, icon, and temperature.

Append the element to the .hourly container.

📌 Sample Markup (index.html)
html
Copy
Edit

<div class="hourly"></div>
🧪 Example Call (JS)
js
Copy
Edit
display2("London");
🔑 Setup Instructions
Get an API key
Register at OpenWeather and get your free API key.

Add your key
In script.js, set your API key:

js
Copy
Edit
const APIkey = "YOUR_API_KEY_HERE";
Open index.html in a browser
Use Live Server or directly open it in Chrome/Firefox.

✅ To Do
Add search input for city names

Style forecast cards

Handle errors more gracefully

Convert temperature units (C/F toggle)
