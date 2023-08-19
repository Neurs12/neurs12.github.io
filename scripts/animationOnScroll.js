const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("AAAAAAAAAA");
            let fadeAnimation = entry.target.querySelectorAll(".fade-animation-hide");
            for (let i = 0; i < fadeAnimation.length; i++) {
                setTimeout(() => {
                    fadeAnimation[i].classList.add("fade-animation-show");
                }, 250 * i);
            }
            let flyAnimation = entry.target.querySelectorAll(".fly-animation-hide");
            for (let i = 0; i < flyAnimation.length; i++) {
                setTimeout(() => {
                    flyAnimation[i].classList.add("fly-animation-show");
                }, 250 * i);
            }
        } else {
            let fadeAnimation = entry.target.querySelectorAll(".fade-animation-hide");
            for (let i = 0; i < fadeAnimation.length; i++) {
                setTimeout(() => {
                    fadeAnimation[i].classList.remove("fade-animation-show");
                }, 250 * i);
            }
            let flyAnimation = entry.target.querySelectorAll(".fly-animation-hide");
            for (let i = 0; i < flyAnimation.length; i++) {
                setTimeout(() => {
                    flyAnimation[i].classList.remove("fly-animation-show");
                }, 250 * i);
            }
        }
    });
});

const sectionContent = document.querySelectorAll(".section-content");
sectionContent.forEach((element) => observer.observe(element));