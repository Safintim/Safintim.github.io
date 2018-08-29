window.onload = getMyLocation;

var ourCoords = {

    latitude: 47.624851,
    longitude: -122.52099
    
};

function getMyLocation(){
    
    // проверяем, поддерживает ли браузер API Geolocation
    if(navigator.geolocation){
        
        // используем объект navigator, чтобы получить доступ к объекту
        // geolocation, который является свойством объекта navigator
        // метод getCurrentPosition() извлекает информацию о местоположение
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
        
    }else {
        
        alert('Ваш браузер не поддерживает API - интерфейс Geolocation');
        
    }
}

// функция получения координат
function displayLocation(position){
    
    // извлекаем широту и долготу местонахождения из объекта position
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    var div = document.getElementById('location');
    div.innerHTML = 'Широта: ' + latitude + '. Долгота: ' + longitude;
    
    var km = computeDistance(position.coords, ourCoords);
    
    var distance = document.getElementById("distance");
    distance.innerHTML = "Ты на расстоянии " + km + " km от офиса O'Rielly";
}

// обработчик ошибок
function displayError(error){
    
    var errorTypes = {
        0: "Неизвестная ошибка",
        1: "Доступ запрещен пользователем",
        2: "Позиция не доступна",
        3: "Превышен интервал ожидания для запроса"
    };
    
    var errorMessage = errorTypes[error.code];
    
    if(error.code == 0|| error.code ==2){
    
        errorMessage = errorMessage + " " + error.message;
    }
    
    var div = document.getElementById('location');
    div.innerHTML = errorMessage;
}
    
// вычисляем расстояние
function computeDistance(startCoords, destCoords){

    var startLatRads = degreesToradians(startCoords.latitude);
    var startLongRads = degreesToradians(startCoords.longitude);
    var destLatRads = degreesToradians(destCoords.latitude);
    var destLongRads = degreesToradians(destCoords.longitude);
    
    var Radius = 6371;
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads)) * Radius;
    
    return distance;
}

function degreesToradians(degrees){

    var radians = (degrees * Math.PI)/180;
    return radians;

}



    
    
    