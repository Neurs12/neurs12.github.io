var iconMap = {
    "open-newtab": '<path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z"/>',
    "copy": '<path d="M300-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560ZM180-80q-24 0-42-18t-18-42v-620h60v620h500v60H180Zm120-180v-560 560Z"/>',
    "done": '<path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z"/>',
    "person": '<path d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm.654 370Q398-80 325-111.5q-73-31.5-127.5-86t-86-127.266Q80-397.532 80-480.266T111.5-635.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5-848.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5-325q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480-140q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z"/>',
    "down": "<path d='M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z'/>",
    "none": "",
    null: "",
};

var mouseOutline = document.getElementById("mouse-outline");
var mouse = document.getElementById("mouse");

var mouseElement = document.getElementById("mouse-custom-element");
var mouseTooltip = document.getElementById("cursor-tooltip");

window.addEventListener("mousemove", (e) => {
    mouse.style.left = `${e.clientX}px`;
    mouse.style.top = `${e.clientY}px`;
    mouseOutline.style.left = `${e.clientX}px`;
    mouseOutline.style.top = `${e.clientY}px`;
    mouseElement.style.left = `${e.clientX}px`;
    mouseElement.style.top = `${e.clientY}px`;
    mouseTooltip.style.left = `${e.clientX}px`;
    mouseTooltip.style.top = `${e.clientY}px`;
});

for (const element of document.getElementsByTagName("a")) {
    if (element.getAttribute("type") == "social-icon") {
        openMouseWithTooltip(element, 70);
    }
    if (element.getAttribute("type") == "nav-section") {
        hideMouseOnHover(element);
    }
}

openMouseWithTooltip(document.getElementById("projects-btn"), 70);
openMouseWithTooltip(document.getElementById("skills-btn"), 70);
openMouseWithTooltip(document.getElementById("mailme-btn"), 70);

function openMouseWithTooltip(element, width) {
    element.addEventListener("mouseover", () => {
        mouse.style.opacity = "0";
        openTooltip(element.getAttribute("tooltip"), element.getAttribute("tooltipWidth"), element.getAttribute("tooltipIcon"));
        openMouseOutline(width);
    });

    element.addEventListener("mouseout", () => {
        mouse.style.opacity = "1";
        closeTooltip();
        closeMouseOutline();
    });

    element.addEventListener("mousedown", () => {
        mouseTooltip.querySelector("svg").setAttribute("width", "10px");
        mouseTooltip.querySelector("svg").setAttribute("height", "10px");
        mouseOutline.style.width = `${width - 10}px`;
        mouseOutline.style.height = `${width - 10}px`;
    });
    
    element.addEventListener("mouseup", () => {
        var mouseTooltipSvg = mouseTooltip.querySelector("svg");
        mouseTooltipSvg.setAttribute("width", "20px");
        mouseTooltipSvg.setAttribute("height", "20px");
        mouseTooltipSvg.innerHTML = iconMap["done"];
        mouseOutline.style.width = `${width}px`;
        mouseOutline.style.height = `${width}px`;
    });
}

function hideMouseOnHover(element) {
    element.addEventListener("mouseover", () => {
        mouse.style.opacity = "0";
        mouseOutline.style.opacity = "0";
        openMouseOutline(0);
    });

    element.addEventListener("mouseout", () => {
        mouse.style.opacity = "1";
        mouseOutline.style.opacity = "1";
        closeMouseOutline(50);
    });
}

function changeCursorToElement(selectedIcon, color) {
    mouse.style.opacity = "0";
    mouseElement.innerHTML = iconMap[selectedIcon];
    mouseElement.style.opacity = "1";
    mouseElement.style.fill = color;
}

function revertBackToCursor() {
    mouse.style.opacity = "1";
    mouseElement.style.opacity = "0";
}

function openMouseOutline(width) {
    mouseOutline.style.height = `${width}px`;
    mouseOutline.style.width = `${width}px`;
}

function closeMouseOutline() {
    mouseOutline.style.width = "50px";
    mouseOutline.style.height = "50px";
}

function openTooltip(content, width, icon) {
    mouseTooltip.style.opacity = "1";
    mouseTooltip.style.width = `${width}px`;
    mouseTooltip.querySelector("p").innerHTML = content;
    mouseTooltip.querySelector("svg").innerHTML = iconMap[icon];
}

function closeTooltip() {
    mouseTooltip.style.opacity = "0";
    mouseTooltip.style.width = "0px";
}