let reqBtn          = document.querySelector('.request-btn');
let reqInput        = document.querySelector('.request-input');
let respResultDiv   = document.querySelector('.response-result');

const API_KEY = ''; //get your key from openweather 

function getCurrentWeather(lat, lon, key) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
}

function getGeoCoords(city, key) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`
}

reqBtn.addEventListener('click', event => {
    let cityName = reqInput.value;

    let geoCoodURL = getGeoCoords(cityName, API_KEY);
    axios.get(geoCoodURL).then(response => {
        let data = response.data[0];
        let lon = data.lon;
        let lat = data.lat;

        let weatherURL = getCurrentWeather(lat, lon, API_KEY);
        axios.get(weatherURL).then(response => {
            let temp = (response.data.main.temp - 273).toFixed(1);
            let cloudiness = response.data.clouds.all + "%";
            respResultDiv.textContent = `The sky is ${cloudiness} cloudy and the tempature is ${temp}`;
        });

        //respResultDiv.textContent = `Lon: ${data.lon}, lat: ${data.lat}`;
    });
});

