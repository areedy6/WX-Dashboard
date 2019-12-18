
var APIKey = "166a433c57516f51dfab1f7edaed8413";
   
$("#button").on("click", function() {

var cityName = $("input:text").val();
document.getElementById("weather-input").innerHTML = cityName; 

// $("input:text").val("");

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
          
        //DAY ONE

          var fiveDiv = $("<div>");
          var time0 = response.list[0].dt;
          var timeDiv0 = $("<p>").text("Date: " + time0);
          var icon0 = response.list[0].weather[0].icon;
          var iconDiv0 = $("<p>").text(icon0);
          var temp0 = response.list[0].main.temp;
          var tempDiv0 = $("<p>").text("Temperature (F): " + temp0);
          var humidity0 = response.list[0].main.humidity;
          var humDiv0 = $("<p>").text("Humidity: " + humidity0);


            fiveDiv.append(timeDiv0);
            console.log(response.list[0].dt);
            fiveDiv.append(iconDiv0);
            console.log(response.list[0].weather[0].icon);
            fiveDiv.append(tempDiv0);
            console.log(response.list[0].main.temp)
            fiveDiv.append(humDiv0);
            console.log(response.list[0].main.humidity)


            $("#5day").prepend(fiveDiv)

        //DAY TWO 

        var fiveDiv = $("<div>");
        var time0 = response.list[1].dt;
        var timeDiv0 = $("<p>").text("Date: " + time0);
        var icon0 = response.list[1].weather[0].icon;
        var iconDiv0 = $("<p>").text(icon0);
        var temp0 = response.list[1].main.temp;
        var tempDiv0 = $("<p>").text("Temperature (F): " + temp0);
        var humidity0 = response.list[1].main.humidity;
        var humDiv0 = $("<p>").text("Humidity: " + humidity0);


            fiveDiv.append(timeDiv0);
            console.log(response.list[1].dt);
            fiveDiv.append(iconDiv0);
            console.log(response.list[1].weather[0].icon);
            fiveDiv.append(tempDiv0);
            console.log(response.list[1].main.temp)
            fiveDiv.append(humDiv0);
            console.log(response.list[1].main.humidity)

            $("#5day").prepend(fiveDiv)

        //DAY THREE

        var fiveDiv = $("<div>");
        var time0 = response.list[2].dt;
        var timeDiv0 = $("<p>").text("Date: " + time0);
        var icon0 = response.list[2].weather[0].icon;
        var iconDiv0 = $("<p>").text(icon0);
        var temp0 = response.list[2].main.temp;
        var tempDiv0 = $("<p>").text("Temperature (F): " + temp0);
        var humidity0 = response.list[2].main.humidity;
        var humDiv0 = $("<p>").text("Humidity: " + humidity0);


            fiveDiv.append(timeDiv0);
            console.log(response.list[2].dt);
            fiveDiv.append(iconDiv0);
            console.log(response.list[2].weather[0].icon);
            fiveDiv.append(tempDiv0);
            console.log(response.list[2].main.temp)
            fiveDiv.append(humDiv0);
            console.log(response.list[2].main.humidity)

            $("#5day").prepend(fiveDiv)

        //DAY FOUR

        var fiveDiv = $("<div>");
        var time0 = response.list[3].dt;
        var timeDiv0 = $("<p>").text("Date: " + time0);
        var icon0 = response.list[3].weather[0].icon;
        var iconDiv0 = $("<p>").text(icon0);
        var temp0 = response.list[3].main.temp;
        var tempDiv0 = $("<p>").text("Temperature (F): " + temp0);
        var humidity0 = response.list[3].main.humidity;
        var humDiv0 = $("<p>").text("Humidity: " + humidity0);


            fiveDiv.append(timeDiv0);
            console.log(response.list[3].dt);
            fiveDiv.append(iconDiv0);
            console.log(response.list[3].weather[0].icon);
            fiveDiv.append(tempDiv0);
            console.log(response.list[3].main.temp)
            fiveDiv.append(humDiv0);
            console.log(response.list[3].main.humidity)

            $("#5day").prepend(fiveDiv)

        // DAY FIVE

        var fiveDiv = $("<div>");
        var time0 = response.list[4].dt;
        var timeDiv0 = $("<p>").text("Date: " + time0);
        var icon0 = response.list[4].weather[0].icon;
        var iconDiv0 = $("<p>").text(icon0);
        var temp0 = response.list[4].main.temp;
        var tempDiv0 = $("<p>").text("Temperature (F): " + temp0);
        var humidity0 = response.list[4].main.humidity;
        var humDiv0 = $("<p>").text("Humidity: " + humidity0);


            fiveDiv.append(timeDiv0);
            console.log(response.list[4].dt);
            fiveDiv.append(iconDiv0);
            console.log(response.list[4].weather[0].icon);
            fiveDiv.append(tempDiv0);
            console.log(response.list[4].main.temp)
            fiveDiv.append(humDiv0);
            console.log(response.list[4].main.humidity)

            $("#5day").prepend(fiveDiv)
        
        })

    })
