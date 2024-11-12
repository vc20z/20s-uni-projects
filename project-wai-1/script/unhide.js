"use strict";
function unhide() {
    const buttonIdFinder = ["megacityfinder", "howlongisthewar", "jquerythings"];
    for (let i = 0; i < buttonIdFinder.length; i++) {
        let thingToUnhide = document.getElementById(buttonIdFinder[i]);
        if (thingToUnhide) {
            thingToUnhide.style.display = "unset !important";
        }
    }
}
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", unhide);
}
else {
    unhide();
}