
var APIKey = "166a433c57516f51dfab1f7edaed8413";
   
$("#button").on("click", function() {

var cityName = $("input:text").val();
document.getElementById("weather-input").innerHTML = cityName; 

// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=cleveland&appid=" + APIKey;

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);  


    var wxDiv = $("<div>");
    var city = response.name;
    // var date = response.dt
    // var pOne = $("<p>").text("City: " + city);
    var pOne = $("<p>").text("City: " + city);
    var wind = response.wind.speed;
    var pTwo = $("<p>").text("Wind Speed: " + wind);
    var humid = response.main.humidity;
    var pThree = $("<p>").text("Humidity: " + humid);
    var temp = response.main.temp;
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    var pFour = $("<p>").text("Temperature: " + tempF + " (F)");
        
    wxDiv.append(pOne);
    console.log(city)
    wxDiv.append(pTwo);
    console.log(wind)
    wxDiv.append(pThree);
    console.log(humid)
    wxDiv.append(pFour);
    console.log(temp)

    

  $("#weather").prepend(wxDiv)

  })
})


// UV INDEX

$("#button").on("click", function() {
    
    // var lat = 
    // var lon = 

    var cityName = $("input:text").val();
    document.getElementById("weather-input").innerHTML = cityName; 
    var queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37" + "&appid=" + APIKey;
    

        $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function(response) {
    
            console.log(queryURL);
            console.log(response);
        })})



// FIVE DAY FORECAST

    $("#button").on("click", function() {

    var cityName = $("input:text").val();
    document.getElementById("weather-input").innerHTML = cityName; 
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey;
    
    
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
  
          console.log(queryURL);
          console.log(response);
        })})


