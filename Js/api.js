
export async function getWeatherData(city){
    const URL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&countryCode=IN&format=json`;
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    if(!data.results || !Array.isArray(data.results)){
      throw new Error("Invalid API Response"); 
    }
    
    const data = await response.json();
    return data;
}
export async function getForecastData(latitude,longitude) {
    const URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=uv_index,surface_pressure,is_day,temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max&timezone=auto`;
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    if (
    !forecastData ||
    typeof forecastData !== "object" ||
    !forecastData.current ||
    !forecastData.daily
) {
    throw new Error("Invalid API Response");
}
    const forecastData = await response.json();
    return forecastData;
}

export async function getLocationName(latitude,longitude){
    const URL =`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    if(!userLocation || typeof userLocation !== "object" || !userLocation.address || typeof userLocation.address !== "object"  ||
    !userLocation.display_name || typeof userLocation.display_name !== "string" ){
      throw new Error("Invalid API Response");
    }
    const userLocation = await response.json();
    return userLocation;
}