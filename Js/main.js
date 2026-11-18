import {cityInput, searchForm,cityLocation, searchBtn, cityName, currentTemp,currentWeatherIcon,weatherCondition} from "./dom.js";
import { getForecastData, getWeatherData } from "./api.js";
import { displayCurrentWeather, getWeatherCondition, showWeatherIcon} from "./weather.js";
searchForm.addEventListener("submit", async (event)=>{
    event.preventDefault();
    console.log(searchForm);
     let city = cityInput.value.trim();
    if(city === ""){
     console.log("Enter city name")
    }else{  
     city = city.toLowerCase();
     city= city.charAt(0).toUpperCase() + city.slice(1);
      const data = await getWeatherData(city);
       if(!data.results || data.results.length === 0){
        console.log("City not Found")
    }
    else{
        const latitude =data.results[0].latitude;
        const longitude=data.results[0].longitude;
         const forecastData = await getForecastData (latitude,longitude);
         console.log(forecastData);
        displayCurrentWeather(forecastData);
        getWeatherCondition(forecastData);
        showWeatherIcon(forecastData.current.weather_code,
            forecastData.current.is_day
        );
    }
       console.log(city);
    } 
});