let frontEndSkillsCard = document.getElementById("front-end-skills-card");
let backEndSkillsCard = document.getElementById("back-end-skills-card");

let frontEndSkills = document.getElementById("front-end-skills");
let backEndSkills = document.getElementById("back-end-skills");

function openFrontendCard() {
    frontEndSkillsCard.style.transform = "translateX(-85%)";
    frontEndSkillsCard.setAttribute("onclick", "closeFrontendCard()");
    frontEndSkillsCard.querySelector("svg").style.opacity = "1";

    frontEndSkills.style.transform = "translateX(0%)";
    frontEndSkills.style.opacity = "1";

    backEndSkillsCard.style.opacity = "0";
    backEndSkillsCard.setAttribute("onclick", "");
}

function closeFrontendCard() {
    frontEndSkillsCard.style.transform = "translateX(0)";
    frontEndSkillsCard.setAttribute("onclick", "openFrontendCard()");
    frontEndSkillsCard.querySelector("svg").style.opacity = "0";

    frontEndSkills.style.transform = "translateX(-50%)";
    frontEndSkills.style.opacity = "0";

    backEndSkillsCard.style.opacity = "1";
    backEndSkillsCard.setAttribute("onclick", "openBackendCard()");
}

function openBackendCard() {
    backEndSkillsCard.style.transform = "translateX(85%)";
    backEndSkillsCard.setAttribute("onclick", "closeBackendCard()");
    backEndSkillsCard.querySelector("svg").style.opacity = "1";

    backEndSkills.style.transform = "translateX(0%)";
    backEndSkills.style.opacity = "1";

    frontEndSkillsCard.style.opacity = "0";
    frontEndSkillsCard.setAttribute("onclick", "");
}

function closeBackendCard() {
    backEndSkillsCard.style.transform = "translateX(0)";
    backEndSkillsCard.setAttribute("onclick", "openBackendCard()");
    backEndSkillsCard.querySelector("svg").style.opacity = "0";

    backEndSkills.style.transform = "translateX(50%)";
    backEndSkills.style.opacity = "0";

    frontEndSkillsCard.style.opacity = "1";
    frontEndSkillsCard.setAttribute("onclick", "openFrontendCard()");
}