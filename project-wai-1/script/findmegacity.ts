function findMegacity() {
    const status = document.querySelector('#status');

    const candidateLatitude: number[] = [1.290270, 31.224361, 59.334591, 50.85045, 31.771959, -34.603722, 47.751076]; // kolejnosc taka sama jak w tablicy megacity
    const candidateLongitude: number[] = [103.851959, 121.469170, 18.063240, 4.34878, 35.217018, -58.381592, -120.740135];

    const megacity: string[] = ["Megamiasto 1 (Singapur)", "Megamiasto 2 (Shanghaj)", "Miasto Dobrobytu (Sztokholm)", "Megamiasto 4 (Bruksela)", "Megamiasto 5 (Jerozolima)", "Megamiasto 6 (Buenos Aires)", "Megamiasto 7 (Waszyngton)"];

    function error() {
        status.textContent = 'Nie mogłem odnaleźć twojej lokalizacji :(';
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        let lowestDistance: number = 1000000;

        let cityNum: number = 0;

        for (let i: number = 0; i < candidateLatitude.length; i++) {
            let distance: number = Math.sqrt((candidateLatitude[i]-latitude)^2 + (candidateLongitude[i]-longitude)^2);
            if (distance < lowestDistance) { cityNum = i; lowestDistance=distance; }
        }

        status.textContent = `Najbliższym Megamiastem dla ciebie jest ${megacity[cityNum]}`
    }

    if(!navigator.geolocation) {
        status.textContent = 'Twoja przeglądarka nie obsługuje Geolocation API'
    } else {
        status.textContent = 'Lokalizuję...';
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

document.querySelector("#megacityfinder").addEventListener("click", findMegacity);