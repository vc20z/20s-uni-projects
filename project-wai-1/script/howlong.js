function howlong() {
    var newParagraph = document.createElement("p");
    var startDate = new Date();
    startDate.setFullYear(2024, 1, 8);
    var currentDate = new Date();
    var days = (currentDate.getTime() - startDate.getTime()) / 86400000; // liczba milisekund w dniu
    var text = document.createTextNode("Ta wojna trwa ju\u017C ".concat(days, " dni."));
    newParagraph.appendChild(text);
    var target = document.querySelector("#newParaTarget");
    target.insertAdjacentElement('afterend', newParagraph);
    document.getElementById("howlongisthewar").disabled = true;
}
document.querySelector("#howlongisthewar").addEventListener('click', howlong);
