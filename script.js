const expand = document.querySelector("#menu_btn");
const proj = document.querySelector("#proj_btn");
const cont = document.querySelector("#cont_btn");
const skills = document.querySelector("#skills_btn");
const resume = document.querySelector("#resume_btn");
const hb = document.querySelector("#head_button");

var expanded = false;

expand.addEventListener("click", () => {
    if(expanded == false){
        expand.innerHTML = "Close";
        proj.classList.add("show");
        proj.style.transform = "translateY(100px)";
        cont.classList.add("show");
        cont.style.transform = "translateY(400px)";
        skills.classList.add("show");
        skills.style.transform = "translateY(200px)";
        resume.classList.add("show");
        resume.style.transform = "translateY(300px)";
        hb.classList.add("show");
    }
    else{
        expand.innerHTML = "Menu";
        proj.classList.remove("show");
        proj.style.transform = "translateY(0)";
        cont.classList.remove("show");
        cont.style.transform = "translateY(0)";
        skills.classList.remove("show");
        skills.style.transform = "translateY(0)";
        resume.classList.remove("show");
        resume.style.transform = "translateY(0)";
        hb.classList.remove("show");
    }
    expanded = !expanded;
});

const proj_page = document.querySelector(".proj_page");
proj.addEventListener("click", () => {
    proj_page.style.top = "0";
})