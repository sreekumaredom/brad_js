//Init storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather obj
const weather = new Weather(weatherLocation);

//Init UI
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  //Change location
  weather.changeLocation(city);

  //Set location in local storage
  storage.setLocationData(city);

  //Get weather again
  getWeather();

  //Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => ui.paint(results))
    .catch((err) => console.log(err));
}
