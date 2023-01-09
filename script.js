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
        let response = await fetch(url);
        let weatherData = await response.json();

        //Log the results to the console
        console.log(weatherData);
        console.log(`Max temp: ${weatherData.main.temp_max}`);
        console.log(`Min temp: ${weatherData.main.temp_min}`);
        console.log(`Current temp: ${weatherData.main.temp}`);
        console.log(`Feels like: ${weatherData.main.feels_like}`);
        console.log(`Humidity: ${weatherData.main.humidity}`);
        console.log(`Weather: ${weatherData.weather[0].description}`);
        console.log(`Wind speed: ${weatherData.wind.speed}`);
    } 
        
    catch (error){
        console.error(error);
        }
}


let submitBtn = document.getElementById('submitButton');
console.log(submitBtn);

submitBtn.addEventListener('click', getWeather);

