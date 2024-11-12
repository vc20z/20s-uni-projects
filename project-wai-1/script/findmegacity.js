function findMegacity() {
    var status = document.querySelector('#status');
    var candidateLatitude = [1.290270, 31.224361, 59.334591, 50.85045, 31.771959, -34.603722, 47.751076]; // kolejnosc taka sama jak w tablicy megacity
    var candidateLongitude = [103.851959, 121.469170, 18.063240, 4.34878, 35.217018, -58.381592, -120.740135];
    var megacity = ["Megamiasto 1 (Singapur)", "Megamiasto 2 (Shanghaj)", "Miasto Dobrobytu (Sztokholm)", "Megamiasto 4 (Bruksela)", "Megamiasto 5 (Jerozolima)", "Megamiasto 6 (Buenos Aires)", "Megamiasto 7 (Waszyngton)"];
    function error() {
        status.textContent = 'Nie mogłem odnaleźć twojej lokalizacji :(';
    }
    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var lowestDistance = 1000000;
        var cityNum = 0;
        for (var i = 0; i < candidateLatitude.length; i++) {
            var distance = Math.sqrt((candidateLatitude[i] - latitude) ^ 2 + (candidateLongitude[i] - longitude) ^ 2);
            if (distance < lowestDistance) {
                cityNum = i;
                lowestDistance = distance;
            }
        }
        status.textContent = "Najbli\u017Cszym Megamiastem dla ciebie jest ".concat(megacity[cityNum]);
    }
    if (!navigator.geolocation) {
        status.textContent = 'Twoja przeglądarka nie obsługuje Geolocation API';
    }
    else {
        status.textContent = 'Lokalizuję...';
        navigator.geolocation.getCurrentPosition(success, error);
    }
}
document.querySelector("#megacityfinder").addEventListener("click", findMegacity);
