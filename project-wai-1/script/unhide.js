function unhide() {
    var buttonIdFinder = ["megacityfinder", "howlongisthewar", "jquerythings"];
    for (var i = 0; i < buttonIdFinder.length; i++) {
        var thingToUnhide = document.getElementById(buttonIdFinder[i]);
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
