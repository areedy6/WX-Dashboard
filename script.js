
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
    var pOne = $("<p>").text("City: " + city);
    var wind = response.wind.speed;
    var pTwo = $("<p>").text("Wind Speed: " + wind);
    var humid = response.main.humidity;
    var pThree = $("<p>").text("Humidity: " + humid);
    var temp = response.main.temp;
    var pFour = $("<p>").text("Temperature: " + temp);

    
    
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




    // var wxDiv = $("<div class='weather'>");
    
    // var city = response.name;

    // var pOne = $("<p>").text("City: " + city);

    // wxDiv.append(pOne);

    // console.log(city)

    // var wind = response.wind.speed;

    // var pTwo = $("<p>").text("Wind Speed: " + wind);

    // wxDiv.append(pTwo);

    // console.log(wind)

    // var humid = response.main.humidity;

    // var pThree = $("<p>").text("Humidity: " + humid);

    // wxDiv.append(pThree);

    // console.log(humid);

    // var temp = response.main.temp;

    // var pFour = $("<p>").text("Temperature: " + temp);

    // wxDiv.append(pFour);

    //     // var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    //     //  $(".tempF").text("Temperature (Kelvin) " + tempF);

    // console.log(temp);

    // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    // $(".wind").text("Wind Speed: " + response.wind.speed);
    // $(".humidity").text("Humidity: " + response.main.humidity);
    // $(".temp").text("Temperature (F) " + response.main.temp);
    
// })
// }


    $("#button").on("click", function() {

    var cityName = $("input:text").val();
    document.getElementById("weather-input").innerHTML = cityName; 
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?" + cityName + "&appid=" + APIKey;
    //   "q=Bujumbura,Burundi&units=imperial&appid=" + APIKey;
    

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
  
          // Log the queryURL
          console.log(queryURL);
  
          // Log the resulting object
          console.log(response);
        })})