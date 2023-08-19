function openFrontendCard() {
    document.getElementById("front-end-skills").style.transform = "translateX(-200%)";
    document.getElementById("front-end-skills").setAttribute("onclick", "closeFrontendCard()");
    document.getElementById("back-end-skills").style.opacity = "0";
    document.getElementById("back-end-skills").setAttribute("onclick", "");
}

function closeFrontendCard() {
    document.getElementById("front-end-skills").style.transform = "translateX(0)";
    document.getElementById("front-end-skills").setAttribute("onclick", "openFrontendCard()");
    document.getElementById("back-end-skills").style.opacity = "1";
    document.getElementById("back-end-skills").setAttribute("onclick", "openBackendCard()");
}

function openBackendCard() {
    document.getElementById("back-end-skills").style.transform = "translateX(200%)";
    document.getElementById("back-end-skills").setAttribute("onclick", "closeBackendCard()");
    document.getElementById("front-end-skills").style.opacity = "0";
    document.getElementById("front-end-skills").setAttribute("onclick", "");
}

function closeBackendCard() {
    document.getElementById("back-end-skills").style.transform = "translateX(0)";
    document.getElementById("back-end-skills").setAttribute("onclick", "openBackendCard()");
    document.getElementById("front-end-skills").style.opacity = "1";
    document.getElementById("front-end-skills").setAttribute("onclick", "openFrontendCard()");
}