var modals = {
    "openTokio": document.getElementById("tokiohotel"),
    "openOreja": document.getElementById("laorejadevangogh"),
    "openLinkin": document.getElementById("linkinpark"),
    "openCanto": document.getElementById("elcantodelloco"),
    "openAvril": document.getElementById("avrillavigne")
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