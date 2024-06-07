const expand = document.querySelector("#menu_btn");
const proj = document.querySelector("#proj_btn");
const cont = document.querySelector("#cont_btn");
const skills = document.querySelector("#skills_btn");
const resume = document.querySelector("#resume_btn");
const hb = document.querySelector("#head_button");

var expanded = false;

function toggleElement(element, transformValue, action) {
    if (action === 'show') {
        element.classList.add("show");
        element.style.transform = `translateY(${transformValue})`;
    } else {
        element.classList.remove("show");
        element.style.transform = "translateY(0)";
    }
}

expand.addEventListener("click", () => {
    if (expanded) {
        expand.innerHTML = "Menu";
        toggleElement(proj, "0", "hide");
        toggleElement(cont, "0", "hide");
        toggleElement(skills, "0", "hide");
        toggleElement(resume, "0", "hide");
        hb.classList.remove("show");
    } else {
        expand.innerHTML = "Close";
        toggleElement(proj, "100px", "show");
        toggleElement(cont, "400px", "show");
        toggleElement(skills, "200px", "show");
        toggleElement(resume, "300px", "show");
        hb.classList.add("show");
    }
    expanded = !expanded;
});

var p_open = false;
const proj_page = document.querySelector(".proj_page");
const menu_box = document.querySelector(".menu_bar");
proj.addEventListener("click", () => {
        proj_page.classList.add("open");
        expand.innerHTML = "Menu";
        toggleElement(proj, "0", "hide");
        toggleElement(cont, "0", "hide");
        toggleElement(skills, "0", "hide");
        toggleElement(resume, "0", "hide");
        hb.classList.remove("show");
        menu_box.style = "opacity: 0; transition: 1s;";
})