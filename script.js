const search = document.getElementById('search');
const submit = document.getElementById('submit');
const selectedCity = document.getElementById('selected-city');

// Fetch the weather by city name
function getWeatherByCityName(e) {
    e.preventDefault();
    const cityName = search.value.trim();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=251f169de2acd1482ee4e621040a7f0f`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            selectedCity.innerHTML = `<h1>${(data.main.temp - 273.15).toFixed(1)}</h1><div class="city-date">
            <h2>${cityName}</h2>
            <h3>06:09 - Monday, 9 Sep '21</h3>
        </div>`;
            console.log((data.main.temp - 273.15).toFixed(1));
        });
}

//Event listeners
submit.addEventListener('submit', getWeatherByCityName);