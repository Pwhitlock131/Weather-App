var APIKey = "83daaadc82f3f3d7bdcb9ebd24147bf8";
var city = "Dallas";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=";
var searchInput = document.querySelector("#search-bar")
var searchForm = document.querySelector("#search-form")
var currentWeatherContainer = document.querySelector("#current-container")


//Need to get weather conditions, both present and future
//Make sure cities are added to search history (Local storage I guess)
//presents city name, date, and icon that reps current weather conditions, temp, humidity, and wind speed
// present a 5 day forcast for searched city
//make sure you can click previous search to re check conditions1

const getWeather = function(city) {
    fetch(queryURL + city + "&appid=" + APIKey)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)
            renderCurrentWeather(data)
        })
};

const renderCurrentWeather = function(city) {
    var cityNameEl = document.createElement("h2")
    cityNameEl.textContent = city.name
    currentWeatherContainer.append(cityNameEl)
    var iconEl = document.createElement("img")
    iconEl.setAttribute("src", `https://openweathermap.org/img/w/${city.weather[0].icon}.png`)
    currentWeatherContainer.append(iconEl)
};



searchForm.addEventListener("submit", function(e){
    e.preventDefault()
    var city = searchInput.value
    getWeather(city)
});



















// fetch(queryURL)
// console.log(queryURL)



// + city + "&appid=" + APIKey

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={83daaadc82f3f3d7bdcb9ebd24147bf8}
// a78ba7a969b051c867faecaa891b95d1 Default Key???


// 83daaadc82f3f3d7bdcb9ebd24147bf8 generated key
