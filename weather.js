const weatheris = document.querySelector(".js-weather");
const COORDS = 'coords';
const API_KEY ="2bdea01d512127a693988284ee4b229c";

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        console.log(json);
        const temperture = json.main.temp;
        const place = json.name;
        console.log(temperture);
        console.log(place);
        weatheris.innerHTML = `${temperture} @ ${place}`;
    })

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handelGeoSuccess(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Cant access")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handelGeoSuccess, handleGeoError)
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null)
        askForCoords();
    else{
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
        }

}

function init(){
    loadCoords();

}

init();