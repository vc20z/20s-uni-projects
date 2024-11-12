function unhide() {
    const buttonIdFinder: string[] = ["megacityfinder", "howlongisthewar", "jquerythings"];

    for (let i: number = 0; i < buttonIdFinder.length; i++) {
        let thingToUnhide = document.getElementById(buttonIdFinder[i]) as HTMLElement;
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