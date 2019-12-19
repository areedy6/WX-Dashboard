$(document).ready(function() {
  $("#search-button").on("click", function() {
    var searchValue = $("#search-value").val();

    $("#search-value").val("");

    searchWeather(searchValue);
  });

  $(".history").on("click", "li", function() {
    searchWeather($(this).text());
  });

  function makeRow(text) {
    var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
    $(".history").append(li);
  }

  function searchWeather(searchValue) {
    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=166a433c57516f51dfab1f7edaed8413",
      dataType: "json",
      success: function(data) {
  
        if (history.indexOf(searchValue) === -1) {
          history.push(searchValue);
          window.localStorage.setItem("history", JSON.stringify(history));
    
          makeRow(searchValue);
        }
        
        $("#today").empty();

        var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
        var card = $("<div>").addClass("card");
        var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
        var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
        var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
        var cardBody = $("<div>").addClass("card-body");
        var img = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

        title.append(img);
        cardBody.append(title, temp, humid, wind);
        card.append(cardBody);
        $("#today").append(card);

        getForecast(searchValue);
        getUVIndex(data.coord.lat, data.coord.lon);
      }
    });
  }


// var APIKey = "166a433c57516f51dfab1f7edaed8413";
   
// $("#button").on("click", function() {

// var cityName = $("input:text").val();
// document.getElementById("weather-input").innerHTML = cityName; 

// // $("input:text").val("");

// // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=cleveland&appid=" + APIKey;

// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(queryURL);
//     console.log(response);  


//     var wxDiv = $("<div>");
//     var city = response.name;
//     // var date = response.dt
//     // var pOne = $("<p>").text("City: " + city);
//     var pOne = $("<p>").text("City: " + city);
//     var wind = response.wind.speed;
//     var pTwo = $("<p>").text("Wind Speed: " + wind);
//     var humid = response.main.humidity;
//     var pThree = $("<p>").text("Humidity: " + humid);
//     var temp = response.main.temp;
//     var tempF = (response.main.temp - 273.15) * 1.80 + 32;
//     var pFour = $("<p>").text("Temperature: " + tempF + " (F)");
        
//     var iconCode = response.weather[0].icon;
//     var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";

//     console.log(iconURL)

//     wxDiv.append(pOne);
//     console.log(city)
//     wxDiv.append(pTwo);
//     console.log(wind)
//     wxDiv.append(pThree);
//     console.log(humid)
//     wxDiv.append(pFour);
//     console.log(temp)

    

//   $("#weather").prepend(wxDiv)
//   $("#wicon").attr('src', iconURL)
  

//   })
// })

// FIVE DAY FORECAST

  function getForecast(searchValue) {
    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=166a433c57516f51dfab1f7edaed8413",
      dataType: "json",
      success: function(data) {
        
        $("#forecast").html("<h4 class=\"mt-3\">5-Day Forecast:</h4>").append("<div class=\"row\">");

        for (var i = 0; i < data.list.length; i++) {
          
          if (data.list[i].dt_txt.indexOf("15:00:00") !== -1) {
            
            var col = $("<div>").addClass("col-md-2");
            var card = $("<div>").addClass("card bg-primary text-white");
            var body = $("<div>").addClass("card-body p-2");

            var title = $("<h5>").addClass("card-title").text(new Date(data.list[i].dt_txt).toLocaleDateString());

            var img = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");

            var p1 = $("<p>").addClass("card-text").text("Temp: " + data.list[i].main.temp_max + " °F");
            var p2 = $("<p>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + "%");

            col.append(card.append(body.append(title, img, p1, p2)));
            $("#forecast .row").append(col);
          }
        }
      }
    });
  }

// UV INDEX

  function getUVIndex(lat, lon) {
    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/uvi?appid=166a433c57516f51dfab1f7edaed8413&lat=" + lat + "&lon=" + lon,
      dataType: "json",
      success: function(data) {
        var uv = $("<p>").text("UV Index: ");
        var btn = $("<span>").addClass("btn btn-sm").text(data.value);
      
        if (data.value < 3) {
          btn.addClass("btn-success");
        }
        else if (data.value < 7) {
          btn.addClass("btn-warning");
        }
        else {
          btn.addClass("btn-danger");
        }
        
        $("#today .card-body").append(uv.append(btn));
      }
    });
  }


  var history = JSON.parse(window.localStorage.getItem("history")) || [];

  if (history.length > 0) {
    searchWeather(history[history.length-1]);
  }

  for (var i = 0; i < history.length; i++) {
    makeRow(history[i]);
  }
});

// FIVE DAY FORECAST

    // $("#button").on("click", function() {

    // var cityName = $("input:text").val();
    // document.getElementById("weather-input").innerHTML = cityName; 
    // var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey;
    
    
    //   $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   })
    //     .then(function(response) {
  
    //       console.log(queryURL);
    //       console.log(response);
          
    //     //DAY ONE

    //       var fiveDiv = $("<div>");
    //       var time0 = response.list[0].dt;
    //       var timeDiv0 = $("<p>").text("Date: " + time0);
    //       var icon0 = response.list[0].weather[0].icon;
    //       var iconDiv0 = $("<p>").text(icon0);
    //       var temp0 = response.list[0].main.temp;
    //       var tempDiv0 = $("<p>").text("Temperature (F): " + temp0);
    //       var humidity0 = response.list[0].main.humidity;
    //       var humDiv0 = $("<p>").text("Humidity: " + humidity0);


    //         fiveDiv.append(timeDiv0);
    //         console.log(response.list[0].dt);
    //         fiveDiv.append(iconDiv0);
    //         console.log(response.list[0].weather[0].icon);
    //         fiveDiv.append(tempDiv0);
    //         console.log(response.list[0].main.temp)
    //         fiveDiv.append(humDiv0);
    //         console.log(response.list[0].main.humidity)


    //         $("#5day").prepend(fiveDiv)

    //     //DAY TWO 

    //     var fiveDiv = $("<div>");
    //     var time0 = response.list[1].dt;
    //     var timeDiv0 = $("<p>").text("Date: " + time0);
    //     var icon0 = response.list[1].weather[0].icon;
    //     var iconDiv0 = $("<p>").text(icon0);
    //     var temp0 = response.list[1].main.temp;
    //     var tempDiv0 = $("<p>").text("Temperature (F): " + temp0);
    //     var humidity0 = response.list[1].main.humidity;
    //     var humDiv0 = $("<p>").text("Humidity: " + humidity0);


    //         fiveDiv.append(timeDiv0);
    //         console.log(response.list[1].dt);
    //         fiveDiv.append(iconDiv0);
    //         console.log(response.list[1].weather[0].icon);
    //         fiveDiv.append(tempDiv0);
    //         console.log(response.list[1].main.temp)
    //         fiveDiv.append(humDiv0);
    //         console.log(response.list[1].main.humidity)

    //         $("#5day").prepend(fiveDiv)

    //     //DAY THREE

    //     var fiveDiv = $("<div>");
    //     var time0 = response.list[2].dt;
    //     var timeDiv0 = $("<p>").text("Date: " + time0);
    //     var icon0 = response.list[2].weather[0].icon;
    //     var iconDiv0 = $("<p>").text(icon0);
    //     var temp0 = response.list[2].main.temp;
    //     var tempDiv0 = $("<p>").text("Temperature (F): " + temp0);
    //     var humidity0 = response.list[2].main.humidity;
    //     var humDiv0 = $("<p>").text("Humidity: " + humidity0);


    //         fiveDiv.append(timeDiv0);
    //         console.log(response.list[2].dt);
    //         fiveDiv.append(iconDiv0);
    //         console.log(response.list[2].weather[0].icon);
    //         fiveDiv.append(tempDiv0);
    //         console.log(response.list[2].main.temp)
    //         fiveDiv.append(humDiv0);
    //         console.log(response.list[2].main.humidity)

    //         $("#5day").prepend(fiveDiv)

    //     //DAY FOUR

    //     var fiveDiv = $("<div>");
    //     var time0 = response.list[3].dt;
    //     var timeDiv0 = $("<p>").text("Date: " + time0);
    //     var icon0 = response.list[3].weather[0].icon;
    //     var iconDiv0 = $("<p>").text(icon0);
    //     var temp0 = response.list[3].main.temp;
    //     var tempDiv0 = $("<p>").text("Temperature (F): " + temp0);
    //     var humidity0 = response.list[3].main.humidity;
    //     var humDiv0 = $("<p>").text("Humidity: " + humidity0);


    //         fiveDiv.append(timeDiv0);
    //         console.log(response.list[3].dt);
    //         fiveDiv.append(iconDiv0);
    //         console.log(response.list[3].weather[0].icon);
    //         fiveDiv.append(tempDiv0);
    //         console.log(response.list[3].main.temp)
    //         fiveDiv.append(humDiv0);
    //         console.log(response.list[3].main.humidity)

    //         $("#5day").prepend(fiveDiv)

    //     // DAY FIVE

    //     var fiveDiv = $("<div>");
    //     var time0 = response.list[4].dt;
    //     var timeDiv0 = $("<p>").text("Date: " + time0);
    //     var icon0 = response.list[4].weather[0].icon;
    //     var iconDiv0 = $("<p>").text(icon0);
    //     var temp0 = response.list[4].main.temp;
    //     var tempDiv0 = $("<p>").text("Temperature (F): " + temp0);
    //     var humidity0 = response.list[4].main.humidity;
    //     var humDiv0 = $("<p>").text("Humidity: " + humidity0);


    //         fiveDiv.append(timeDiv0);
    //         console.log(response.list[4].dt);
    //         fiveDiv.append(iconDiv0);
    //         console.log(response.list[4].weather[0].icon);
    //         fiveDiv.append(tempDiv0);
    //         console.log(response.list[4].main.temp)
    //         fiveDiv.append(humDiv0);
    //         console.log(response.list[4].main.humidity)

    //         $("#5day").prepend(fiveDiv)
        
    //     })

    // })

    // UV INDEX

// $("#button").on("click", function() {
    
//     // var lat = 
//     // var lon = 

//     var cityName = $("input:text").val();
//     document.getElementById("weather-input").innerHTML = cityName; 
//     var queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37" + "&appid=" + APIKey;
    

//         $.ajax({
//         url: queryURL,
//         method: "GET"
//         })
//         .then(function(response) {
    
//             console.log(queryURL);
//             console.log(response);
//         })})
