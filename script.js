

// function displayWXInfo() {
var APIKey = "e9f0680aefb142c325206fad739a2385";
// var inputCity = "(#button)"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=cleveland&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);

    var wxDiv = $("<div class='weather'>");
    
    var city = response.name;

    var pOne = $("<p>").text("City: " + city);

    wxDiv.append(pOne);

    console.log(city)

    var wind = response.wind.speed;

    var pTwo = $("<p>").text("Wind Speed: " + wind);

    wxDiv.append(pTwo);

    console.log(wind)



    // var hummidDiv = $("<div class='weather'>");

    // var tempDiv = $("<div class='weather'>");
    
    // var uvDiv = $("<div class='weather'>");
})
// }