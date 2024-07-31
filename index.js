const searchBox = document.getElementById('search');
let locale = 'fraser, mi'

//result variables
const resolvedLocation = document.getElementById('locationFound');
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
                //resolvedLocation.innerText = response.resolvedAddress;
                currConditions.innerText = response.currentConditions.conditions;
                currTemperature.innerText = response.currentConditions.temp;
                feelsLikeTemp.innerText = response.currentConditions.feelslike;
                console.log(response.resolvedAddress)
            })
            .catch(error => alert(error));
};

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        locale = searchBox.value;
        getWeather(locale);
    }
});

getWeather(locale);