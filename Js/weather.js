import { feelsLike, highTemp, lowTemp, tempNumber, weatherCondition, currentWeatherIcon, humidity, windSpeed, uvIndex, pressure} from "./dom.js";

 export function displayCurrentWeather(forecastData){
    tempNumber.textContent = forecastData.current.temperature_2m;
    feelsLike.textContent = forecastData.current.apparent_temperature;
    highTemp.textContent= forecastData.daily.temperature_2m_max[0];
    lowTemp.textContent=forecastData.daily.temperature_2m_min[0];
    humidity.textContent= forecastData.current.relative_humidity_2m;
    windSpeed.textContent= `${forecastData.current.wind_speed_10m}-km/h`;
    uvIndex.textContent= forecastData.current.uv_index;
    pressure.textContent= forecastData.current.surface_pressure;
}

function getWeatherCode(code){
    if(code === 0){
        return "Clear Sky";
    }
    else if(code === 1){
        return "Mainly Clear";
    }
    else if(code === 2){
        return "Partly cloudy";
    }
    else if(code === 61 || code === 63 || code === 65) {
        return "Rain";
    }
    else if(code === 45 || code === 48 ) {
        return "Fog";
    }
    else if(code === 51 || code === 53 || code === 55) {
        return "Drizzle";
    }
    else if(code === 71 || code === 73 || code === 75) {
        return "Snow";
    }
    else if(code === 95){
        return "Thunderstorm";
    }
    else {
        return "Unknown Weather "
    }
}


export function getWeatherCondition(forecastData){
  const code = forecastData.current.weather_code;
    weatherCondition.textContent=getWeatherCode(code);
}

export function showWeatherIcon(code, is_day){
  if((code === 0 || code === 1) && is_day === 0)
     {
     currentWeatherIcon.src = "assets/icons/night.png";
  }
    else if((code === 1 || code === 0 ) && is_day === 1){
        currentWeatherIcon.src = "assets/icons/sunny.png";
    }
    else if(code === 2){
       currentWeatherIcon.src = "assets/icons/partly-cloudy.png";
    }
    else if(code === 3){
       currentWeatherIcon.src = "assets/icons/cloud.png";
    }
    else if(code === 61 || code === 63 || code === 65) {
        currentWeatherIcon.src = "assets/icons/rainy.png";
    }
    else if(code === 45 || code === 48 ) {
        currentWeatherIcon.src = "assets/icons/smoke.png";
    }
    else if(code === 51 || code === 53 || code === 55) {
       currentWeatherIcon.src = "assets/icons/rainy.png";
    }
    else if(code === 71 || code === 73 || code === 75) {
       currentWeatherIcon.src = "assets/icons/snow.png";
    }
    else if(code === 95){
        currentWeatherIcon.src = "assets/icons/thunderstorm.png";
    }
    else {
        currentWeatherIcon.src = "assets/icons/thunderstorm.png";
    }
}