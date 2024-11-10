# User Information and Weather App

This project is a JavaScript-based application that fetches and displays user information, including local date and time, geographical location, and weather details based on the user's current position. The weather data is retrieved using a free weather API, making it a helpful tool for learning JavaScript, geolocation, and API integration.

## Features

- **Local Date and Time**: Displays the user's current date and time, updating every second.
- **Geolocation**: Fetches the user's latitude and longitude using the Navigator API.
- **Weather Information**: Retrieves weather data for the user's location, including:
  - City and Region
  - Temperature
  - Country
  - Timezone
- **Browser Details**: Displays the browser's user agent string for further system insights.

## Project Structure

- `index.html`: Contains the HTML structure of the app.
- `script.js`: JavaScript file that handles data fetching, geolocation, and API calls.
- `style.css`: Adds styling to the UI components.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```
2. Replace `YOUR_API_KEY` in `script.js` with your own weather API key from [WeatherAPI](https://www.weatherapi.com/).
3. Open `index.html` in a browser to see the app in action.

## Dependencies

- [WeatherAPI](https://www.weatherapi.com/) for fetching weather information.

## Screenshots

![Page Screenshot](screenshot.png)

## License

This project is open-source and available for everyone.
