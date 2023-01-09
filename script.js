async function getWeather(event) {
    try {
        event.preventDefault();

        //Get the location input from the form
        let location = document.getElementById("city").value;
        console.log(location);

        //Turn the input into a string
        let weatherLocation = String(location);

        //Fetch the weather for that location
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&APPID=9fd2540735d4b8bf8b1d4439bfac44ef&units=imperial`;
        console.log(url);
        let response = await fetch(url);
        let weatherData = await response.json();

        //Log the results to the console
        console.log(weatherData);

        //create an object with the required data
        let todaysForecast = {
            maxTemp: weatherData.main.temp_max,
            minTemp: weatherData.main.temp_min,
            currentTemp: weatherData.main.temp,
            feelsLike: weatherData.main.feels_like,
            humidity: weatherData.main.humidity,
            weather: weatherData.weather[0].description,
            windSpeed: weatherData.wind.speed,
        }

        console.log(todaysForecast);

        return todaysForecast;
    } 
        
    catch (error){
        console.error(error);
        }
}


let submitBtn = document.getElementById('submitButton');
console.log(submitBtn);

submitBtn.addEventListener('click', getWeather);

