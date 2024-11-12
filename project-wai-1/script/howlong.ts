function howlong() {
    const newParagraph = document.createElement("p")

    const startDate = new Date();
    startDate.setFullYear(2024, 1, 8);
    const currentDate = new Date();

    const days: number = (currentDate.getTime() - startDate.getTime())/86400000; // liczba milisekund w dniu

    const text = document.createTextNode(`Ta wojna trwa już ${days} dni.`);
    newParagraph.appendChild(text);

    const target = document.querySelector("#newParaTarget") as HTMLElement;

    target.insertAdjacentElement('afterend', newParagraph);

    (document.getElementById("howlongisthewar") as HTMLButtonElement).disabled = true;
}

(document.querySelector("#howlongisthewar") as HTMLElement).addEventListener('click', howlong)