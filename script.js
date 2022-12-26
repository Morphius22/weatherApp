async function getWeather(location) {
    try {
        let weatherLocation = String(location);
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&APPID=9fd2540735d4b8bf8b1d4439bfac44ef`;
        let response = await fetch(url);
        let weatherData = await response.json();
        console.log(`this is the weather Location: ${weatherLocation}`);
        console.log(`this is the URL: ${url}`);
        await console.log(`this is the weatherData: ${weatherData}`);
    } catch (error){
        console.error(error);
    }
}

getWeather('London');
