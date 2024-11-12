function unhide() {
    const buttonIdFinder: string[] = ["megacityfinder", "howlongisthewar", "jquerythings"];

    for (let i: number = 0; i < buttonIdFinder.length; i++) {
        let thingToUnhide: HTMLElement = document.getElementById(buttonIdFinder[i]);
        if(thingToUnhide) {
            thingToUnhide.style.display = "unset !important";
        }
    }
}

if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", unhide);
} else {
    unhide();
}