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
    myLocation,
    closeBtn,
    errorModal,
    tryAgain,
    errorMsg,
    errorTitle
} from "./dom.js";
import { getForecastData, getLocationName, getWeatherData } from "./api.js";
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
closeBtn.addEventListener("click", ()=>{
    errorModal.classList.remove("active");
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
             function showError(message, title){
                errorModal.classList.add("active");
                errorMsg.textContent = message;
                errorTitle.textContent = title;
            }

            function getUserLocation(){
               navigator.geolocation.getCurrentPosition(
                async (position)=>{
                console.log("Success");
                loadingEffect.classList.add("active");

               try{
                const userData = await getLocationName(position.coords.latitude, position.coords.longitude);
                console.log(userData);
                const locationName = userData.address.city || userData.address.town || userData.address.village || userData.address.county ||  userData.address.state || "Current Location" ;
                cityName.textContent = locationName;
                cityLocation.textContent = locationName;
               }
               catch(error){
                console.log("Location name error:", error.message);
                 cityName.textContent = "Current Location";
                 cityLocation.textContent = "Current Location";
               }

                try{
                const newData = await  getForecastData(position.coords.latitude, position.coords.longitude); 
                displayCurrentWeather(newData);
                showForecast(newData);
                getWeatherCondition(newData);
                showWeatherIcon(newData.current.weather_code, newData.current.is_day);
                }  
                catch(error){
                    console.log("Fetch error:", error.message);
                    showError("Unable to fetch weather data. Please try again",
                        "Weather Unavailable"
                    );
                }
                finally{
                   loadingEffect.classList.remove("active");
                 }
                },
                 (error) => {
                 showError("Unable to detect your current location.",
                    "Location Unavailable");
                  console.log(error.code);
                  console.log(error.message);
                },

                {
                enableHighAccuracy: false,
                    timeout: 20000,
                    maximumAge: 60000
                }
             );
 }

            myLocation.addEventListener("click", ()=>{
                console.log("Button clicked");
                getUserLocation();
            });
             tryAgain.addEventListener("click", ()=>{
               errorModal.classList.remove("active");
                getUserLocation();
            });
         
            

            