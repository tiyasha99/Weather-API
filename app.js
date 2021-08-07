
const storage = new Storage()

//get stored location data
const weatherLocation = storage.getLocationData();
//Init weather object

const weather = new Weather(weatherLocation.city, weatherLocation.country);

//Init ui
const ui=new UI();

document.addEventListener('DOMContentLoaded',getWeather);

//Change locaion event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  console.log('hi');
  const city = document.getElementById('city').value;
  const state = document.getElementById('country').value;
  weather.changeLocation(city, state);
  //set location in local storage
  storage.setLocationData(city, state)

  //Get and display weather
  getWeather();

  //Close modal
  $('#locModal').modal('hide');
})
function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err=>console.log(err));
}
