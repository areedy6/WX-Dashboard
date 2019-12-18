
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
        
    var iconCode = response.weather[0].icon;
    var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";

    console.log(iconURL)

    wxDiv.append(pOne);
    console.log(city)
    wxDiv.append(pTwo);
    console.log(wind)
    wxDiv.append(pThree);
    console.log(humid)
    wxDiv.append(pFour);
    console.log(temp)

    

  $("#weather").prepend(wxDiv)
  $("#wicon").attr('src', iconURL)
  

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
          
          console.log(response.list[0].dt);
          console.log(response.list[0].weather[0].icon);
          console.log(response.list[0].main.temp)
          console.log(response.list[0].main.humidity)

          console.log(response.list[1].dt);
          console.log(response.list[1].weather[0].icon);
          console.log(response.list[1].main.temp)
          console.log(response.list[1].main.humidity)

          console.log(response.list[2].dt);
          console.log(response.list[2].weather[0].icon);
          console.log(response.list[2].main.temp)
          console.log(response.list[2].main.humidity)

          console.log(response.list[3].dt);
          console.log(response.list[3].weather[0].icon);
          console.log(response.list[3].main.temp)
          console.log(response.list[3].main.humidity)

          console.log(response.list[4].dt);
          console.log(response.list[4].weather[0].icon);
          console.log(response.list[4].main.temp)
          console.log(response.list[4].main.humidity)



        //   console.log(response.list[1].main)
        //   console.log(response.list[2].main)
        //   console.log(response.list[3].main)
        //   console.log(response.list[4].main)
        })})


