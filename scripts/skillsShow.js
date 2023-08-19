let frontEndSkills = document.getElementById("front-end-skills");
let backEndSkills = document.getElementById("back-end-skills");

function openFrontendCard() {
    frontEndSkills.style.transform = "translateX(-200%)";
    frontEndSkills.setAttribute("onclick", "closeFrontendCard()");
    frontEndSkills.querySelector("svg").style.opacity = "1";

    backEndSkills.style.opacity = "0";
    backEndSkills.setAttribute("onclick", "");
}

function closeFrontendCard() {
    frontEndSkills.style.transform = "translateX(0)";
    frontEndSkills.setAttribute("onclick", "openFrontendCard()");
    frontEndSkills.querySelector("svg").style.opacity = "0";

    backEndSkills.style.opacity = "1";
    backEndSkills.setAttribute("onclick", "openBackendCard()");
}

function openBackendCard() {
    backEndSkills.style.transform = "translateX(200%)";
    backEndSkills.setAttribute("onclick", "closeBackendCard()");
    backEndSkills.querySelector("svg").style.opacity = "1";

    frontEndSkills.style.opacity = "0";
    frontEndSkills.setAttribute("onclick", "");
}

function closeBackendCard() {
    backEndSkills.style.transform = "translateX(0)";
    backEndSkills.setAttribute("onclick", "openBackendCard()");
    backEndSkills.querySelector("svg").style.opacity = "0";

    frontEndSkills.style.opacity = "1";
    frontEndSkills.setAttribute("onclick", "openFrontendCard()");
}