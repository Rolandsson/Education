/*
Uppgiften är att skapa en värder raport för den aktivitetshemsidan du gjorde i inlämningsuppgift 1
Börja med att lägga till dina html och css filer i detta projekt, glöm inte att lägga till script-tagen för app.js i html:en!

  Du väljer om du antingen vill skapa en ny navigering för väder raport, eller om du vill inkludera vädret i navigeringsfältet

  För att få riktig värder data så ska vi använda openweather, gör följande.
  1. Registera dig hos openweather --> https://openweathermap.org
  2. På höger i navgeringen, tryck på din profil och välj "my API keys"
  3. Skapa en ny nyckel med namnet "WebGtg21"
  4. Kopiera den nya nyckel

  Obs! denna nyckel är endast din, du bör ej dela denna på github eller med andra

  Ta koden från live-coding där vi använde antingen promises eller axios, koden under är den med axios.
  Sätt variabeln API_KEY tilldelat din egna nyckel
*/

const API_KEY = '';

function getCurrentWeatherURL(lon, lat, key) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
}

function getSearchWeatherURL(city, key) {
  return `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`;
}

/**
 * Du är fri att ändra denna kod hur mycket du vill
 * Koden hämtar just nu molnlighet och temperaturen för den stad som du skickar in
 * @param {*} city - Namn på stad
 */
function findWeather(city) {
  let searchURL = getSearchWeatherURL(city, API_KEY);

  axios.get(searchURL).then(response => {
    let data = response.data[0];
    let weatherURL = getCurrentWeatherURL(data.lon, data.lat, API_KEY);

    axios.get(weatherURL).then(response => {
      let data = response.data;
      let temp = parseInt(data.main.temp) - 273;
      let cloud = data.clouds.all + "%";

      //Här har du temp och molnlighet för den stad som du skickade in i funktionen
      //Gör så att dessa syns på hemsidan

      //Det finns mer väder data som du kan använda, se https://openweathermap.org/current
    });
  });
};