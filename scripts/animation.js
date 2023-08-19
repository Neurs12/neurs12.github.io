document.addEventListener("DOMContentLoaded", () => {
    let fadeIn = document.querySelectorAll(".fade-animation");
    for (let i = 0; i < fadeIn.length; i++) {
        setTimeout(() => {fadeIn[i].style.opacity = 1}, 250 * i);
    };
    let floatIn = document.querySelectorAll(".fly-animation");
    for (let i = 0; i < floatIn.length; i++) {
        setTimeout(() => {floatIn[i].style.transform = "translateY(0)"}, 250 * i);
    };
});