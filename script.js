async function getWeather() {
    try {
        let location = document.getElementById("city").value;
        console.log(location);
        let weatherLocation = String(location);
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&APPID=9fd2540735d4b8bf8b1d4439bfac44ef&units=imperial`;
        let response = await fetch(url);
        let weatherData = await response.json();
        console.log(weatherData);
        } 
        
    catch (error){
        console.error(error);
        }
}


let submitBtn = document.getElementById('submitButton');
console.log(submitBtn);

submitBtn.addEventListener('click', getWeather);

