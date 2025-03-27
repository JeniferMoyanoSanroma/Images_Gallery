var modals = {
    "openTokio": document.getElementById("tokiohotel"),
    "openOreja": document.getElementById("laorejadevangogh"),
    "openLinkin": document.getElementById("linkinpark"),
    "openCanto": document.getElementById("elcantodelloco"),
    "openAvril": document.getElementById("avrillavigne"),
    "openPignoise": document.getElementById("pignoise"),
    "openImagine": document.getElementById("imaginedragons"),
    "openHombres": document.getElementById("loshombresg"),
    "openRBD": document.getElementById("rbd"),
    "openBritney": document.getElementById("britneyspears"),
    "openBackstreet": document.getElementById("backstreetboys"),
    "openBruno": document.getElementById("brunomars"),
    "openCamila": document.getElementById("camilacabello"),
    "openLady": document.getElementById("ladygaga"),
    "openRihanna": document.getElementById("rihanna"),
    "openWeeknd": document.getElementById("theweeeknd")
};

Object.keys(modals).forEach(btnId => {
    document.getElementById(btnId).onclick = function() {
        modals[btnId].style.display = "flex";
    };
});

document.querySelectorAll(".modal").forEach(modal => {
    modal.querySelector(".close").onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});