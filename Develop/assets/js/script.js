var APIKey = "83daaadc82f3f3d7bdcb9ebd24147bf8";
var city = "Dallas";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var searchedCity = document.querySelector("#search-bar").value
var searchForm = document.querySelector("#search-form")





fetch(queryURL)
console.log(queryURL)














// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={83daaadc82f3f3d7bdcb9ebd24147bf8}
// a78ba7a969b051c867faecaa891b95d1 Default Key???


// 83daaadc82f3f3d7bdcb9ebd24147bf8 generated key

searchForm.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(searchedCity)
});