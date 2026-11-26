
import {
    searchInput, searchCloseBtn, openSearchBtn, searchOverlay,
    cityLocation, cityName, searchResult, loadingEffect,
    todayDate, myLocation, closeBtn, errorModal, tryAgain,
    errorMsg, errorTitle, locationBtn
} from "./dom.js";

import {
    getForecastData, getLocationName, getWeatherData
} from "./api.js";

import {
    displayCurrentWeather, getWeatherCondition,
    showWeatherIcon, showForecast, showsearchResult
} from "./weather.js";


// 1. HELPER FUNCTIONS

function updateDate(newData) {
    const localDate = newData.current.time.split("T")[0];
    const [year, month, day] = localDate.split("-");
    todayDate.textContent = `${day}/${month}/${year}`;
}

function showError(message, title) {
    errorModal.classList.add("active");
    errorMsg.textContent = message;
    errorTitle.textContent = title;
}


// 2. LOCATION FUNCTION

function getUserLocation() {
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            console.log("Success");
            loadingEffect.classList.add("active");
            locationBtn.innerText = "Refresh Location";

            try {
                // Reverse Geocoding
                try {
                    const userData = await getLocationName(
                        position.coords.latitude,
                        position.coords.longitude
                    );

                    const address = userData.address || {};

                    const locationName =
                        address.city ||
                        address.town ||
                        address.village ||
                        address.county ||
                        address.state ||
                        "Current Location";

                    cityName.textContent = locationName;
                    cityLocation.textContent = locationName;

                } catch (error) {
                    console.log("Location name error:", error.message);

                    cityName.textContent = "Current Location";
                    cityLocation.textContent = "Current Location";
                }

                // Weather API
                try {
                    const newData = await getForecastData(
                        position.coords.latitude,
                        position.coords.longitude
                    );

                    updateDate(newData);
                    displayCurrentWeather(newData);
                    showForecast(newData);
                    getWeatherCondition(newData);
                    showWeatherIcon(
                        newData.current.weather_code,
                        newData.current.is_day
                    );

                } catch (error) {
                    console.log("Fetch error:", error.message);

                    showError(
                        "Unable to fetch weather data. Please try again.",
                        "Weather Unavailable"
                    );
                }

            } finally {
                loadingEffect.classList.remove("active");
                locationBtn.disabled = false;
            }
        },

        (error) => {
            showError(
                "Unable to detect your current location.",
                "Location Unavailable"
            );

            locationBtn.disabled = false;
            locationBtn.innerText = originalText;

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

const originalText = locationBtn.innerText;

// 3. CITY SEARCH + DEBOUNCING

let timerId = null;
searchInput.addEventListener("input", (event) => {

    let city = event.target.value.trim();

    clearTimeout(timerId);
    timerId = setTimeout(async () => {
        if (city === "") {
            searchResult.innerHTML = "";
            return;
        }

        city = city.toLowerCase();
        city = city.charAt(0).toUpperCase() + city.slice(1);

        try {
            const data = await getWeatherData(city);
            if (!data.results || data.results.length === 0) {
                searchResult.innerHTML = "City Not Found";
                return;
            }

            showsearchResult(data.results, async (place) => {
                loadingEffect.classList.add("active");
                searchOverlay.classList.remove("active");

                try {
                    const forecastData = await getForecastData(
                        place.latitude,
                        place.longitude
                    );

                    displayCurrentWeather(forecastData);
                    showForecast(forecastData);
                    getWeatherCondition(forecastData);
                    showWeatherIcon(
                        forecastData.current.weather_code,
                        forecastData.current.is_day
                    );

                    updateDate(forecastData);

                    cityName.textContent = place.name;
                    cityLocation.textContent = place.name;

                } catch (error) {
                    console.log("Weather Error:", error.message);

                    showError(
                        "Unable to fetch weather data. Please try again.",
                        "Weather Unavailable"
                    );

                } finally {
                    loadingEffect.classList.remove("active");
                    searchInput.value = "";
                    searchResult.innerHTML = "";
                }
            });

        } catch (error) {
            console.log("Search Error:", error);
            searchOverlay.classList.remove("active");
            showError(
                "This Search is not available",
                "Search Unavailable"
            );
        }

    }, 500);
});


// 4. LOCATION BUTTON EVENTS

myLocation.addEventListener("click", () => {
    locationBtn.disabled = true;
    locationBtn.innerText = "Processing...";

    getUserLocation();
});

tryAgain.addEventListener("click", () => {
    errorModal.classList.remove("active");

    locationBtn.disabled = true;
    locationBtn.innerText = "Processing...";

    getUserLocation();
});


// 5. SEARCH OVERLAY EVENTS

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


// 6. ERROR MODAL EVENTS

closeBtn.addEventListener("click", () => {
    errorModal.classList.remove("active");
});
