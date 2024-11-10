const button = document.getElementById("button");
const lat = document.getElementById("l1");
const long = document.getElementById("l2");
const browserdetails = document.getElementById("browserdetails");

const editCityName = document.getElementById("editCityName");
const editRegion = document.getElementById("editRegion");
const editCityTemp = document.getElementById("editCityTemp");
const editCountry = document.getElementById("editCountry");
const editTimeZone = document.getElementById("editTimeZone");
const localtime = document.getElementById("localtime");
const localdate = document.getElementById("localdate");

//function for time
function showTime() {
  const myTime = new Date();

  const hours = String(myTime.getHours() % 12).padStart(2, "0"); // Add leading zero to hours
  const minutes = String(myTime.getMinutes()).padStart(2, "0"); // Add leading zero to minutes
  const seconds = String(myTime.getSeconds()).padStart(2, "0"); // Add leading zero to seconds

  const time = `${hours}:${minutes}:${seconds}`;

  const day = String(myTime.getDate()).padStart(2, "0"); // Add leading zero to day
  const month = String(myTime.getMonth() + 1).padStart(2, "0"); // Add leading zero to month
  const year = myTime.getFullYear();

  const date = `${day}/${month}/${year}`;

  localtime.innerHTML = `Local Time = ${time}`;
  localdate.innerHTML = `Local Date = ${date}`;
}

//create your own weather api key
async function getData(lat, long) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=dbbede561c4c44e799d212959240911&q=${lat},${long}&aqi=yes`
  );
  return promise.json();
}

async function PositionSuccessful(pos) {
  console.log("Location fetch successful");
  // Extracting position coordinates
  const { latitude, longitude } = pos.coords;

  // Display the user's location
  lat.innerHTML = `Latitude : ${latitude}`;
  long.innerHTML = `Longitude : ${longitude}`;

  const weatherData = await getData(pos.coords.latitude, pos.coords.longitude);

  // Display weather and location details
  editCityName.innerHTML = `City: ${weatherData.location.name}`;
  editRegion.innerHTML = `Region: ${weatherData.location.region}`;
  editCityTemp.innerHTML = `Temperature: ${weatherData.current.temp_c}°C`;
  editCountry.innerHTML = `Country: ${weatherData.location.country}`;
  editTimeZone.innerHTML = `Time Zone: ${weatherData.location.tz_id}`;
}
function posFailed() {
  console.log("Error in fetching current posiiton");
}

button.addEventListener("click", async () => {
  // Get the current location
  navigator.geolocation.getCurrentPosition(PositionSuccessful, posFailed);

  // Get the browser details
  const getBrowserDetails = navigator.userAgent;

  // Display browser details
  browserdetails.innerHTML = `Browser Details: ${getBrowserDetails}`;
});

setInterval(showTime, 1000);
