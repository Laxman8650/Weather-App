import {
    searchInput,
    searchCloseBtn,
    openSearchBtn,
    searchOverlay,
    cityLocation,
    cityName,
    currentTemp,
    currentWeatherIcon,
    weatherCondition,
    searchResult,
    loadingEffect,
    todayDate,
    myLocation
} from "./dom.js";
import { getForecastData, getWeatherData } from "./api.js";
import { displayCurrentWeather, getWeatherCondition, showWeatherIcon, showForecast, showsearchResult} from "./weather.js";
    
    openSearchBtn.addEventListener("click", () => {
    searchOverlay.classList.add("active");
    searchInput.focus();
});

searchCloseBtn.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
});
searchOverlay.addEventListener("mouseover", (event) => {
    if (event.target === searchOverlay) {
        searchOverlay.classList.remove("active");
    }
});
searchInput.addEventListener("input", async ()=>{
   
     let city = searchInput.value.trim();

    if(city === ""){
     searchResult.innerHTML ="";
     return;

    } 
     city = city.toLowerCase();
     city= city.charAt(0).toUpperCase() + city.slice(1);
      const data = await getWeatherData(city);
      
       if(!data.results || data.results.length === 0){
        searchResult.innerHTML ="City Not Found";
        return;
       }
        showsearchResult(data.results, async (place)=>{
            loadingEffect.classList.add("active");
            searchOverlay.classList.remove("active");
           const forecastData = await getForecastData(place.latitude, place.longitude);
            displayCurrentWeather(forecastData);
            showForecast(forecastData);
            getWeatherCondition(forecastData);
            showWeatherIcon(forecastData.current.weather_code, forecastData.current.is_day);
            cityName.textContent = place.name;
            cityLocation.textContent= place.name;
            loadingEffect.classList.remove("active");
            searchInput.value= "";
            searchResult.innerHTML ="";  
            const now = new Date();
            const date = now.getDate();
             const month = now.getMonth() +1;
              const year = now.getFullYear();
            todayDate.textContent = `${date}/${month}/${year}`;
        });
});
              myLocation.addEventListener("click", ()=>{
                console.log("Button clicked");
              navigator.geolocation.getCurrentPosition(
                async (position)=>{
                console.log("Success");
                loadingEffect.classList.add("active");
                try{
                const newData = await  getForecastData(position.coords.latitude, position.coords.longitude);
                displayCurrentWeather(newData);
                showForecast(newData);
                getWeatherCondition(newData);
                showWeatherIcon(newData.current.weather_code, newData.current.is_day);
                }  
                catch(err){
                     console.log("Error Message:", err.message);
                }
               finally{
                   loadingEffect.classList.remove("active");
                 }
                },
                 (error) => {
                  console.log(error.code);
                  console.log(error.message);
                },

                {
                enableHighAccuracy: false,
                    timeout: 30000,
                    maximumAge: 60000
                }
             );
            });