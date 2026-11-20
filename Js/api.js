import { cityInput, cityName } from "./dom.js" // city input par problem

export async function getWeatherData(city){
    const URL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&countryCode=IN&format=json`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

export async function getForecastData(latitude,longitude) {
    const URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=uv_index,surface_pressure,is_day,temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
    const response = await fetch(URL);
    const forecastData = await response.json();
    return forecastData;
}