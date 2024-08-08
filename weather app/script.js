
const inputBox = document.querySelector('.inputBox');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "92345fe7fe7f4680fa122f38ffe8502c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;


    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
        const weather_data = await response.json();
     
                          
                          
                          

    if (weather_data.cod === '404') {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch (weather_data.weather[0].main) {
        
        case 'Sunny':
            weather_img.src="images/sunny.png";
            break;
        case 'Clouds':
            weather_img.src="images/cloud.png";
            break;
        case 'Mist':
            weather_img.src="images/mist.png";
            break;
        case 'Rain':
            weather_img.src="images/rain.png";
            break;
        case 'Clear':
            weather_img.src="images/clear.png";
            break;
        case 'Smoke':
            weather_img.src="images/smoke.png";
            break;

        case 'Scattered':
            weather_img.src="images/scattered.png";
            break;


        case 'Broken Clouds':
            weather_img.src="images/broken clouds.png";
            break;


        default:
            weather_img.src = "images/default.png";
            break;
   
    }

console.log(weather_data);
} catch (error) {
    console.error("Error fetching weather data: ", error);
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
}
    
}

searchBtn.addEventListener('click', () => {
      checkWeather(inputBox.value);
});











