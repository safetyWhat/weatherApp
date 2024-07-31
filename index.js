const currConditions = document.getElementById('conditions');
const currTemperature = document.getElementById('temperature');
const feelsLikeTemp = document.getElementById('feelsLike');

const getWeather = (location) => {
    const localURL = (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current%2Cdays&key=XCJFEZRSFRMQL9BAF3UZRBR6A&contentType=json`)
        fetch(localURL)
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                currConditions.innerText = response.currentConditions.conditions;
                currTemperature.innerText = response.currentConditions.temp;
                feelsLikeTemp.innerText = response.currentConditions.feelslike;
            })
};

getWeather(48026);