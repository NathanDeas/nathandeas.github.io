document.addEventListener("DOMContentLoaded", () => {
    const expand = document.querySelector("#menu_btn");
    const proj = document.querySelector("#proj_btn");
    const cont = document.querySelector("#cont_btn");
    const skills = document.querySelector("#skills_btn");
    const resume = document.querySelector("#resume_btn");
    const hb = document.querySelector("#head_button");
    const proj_page = document.querySelector(".proj_page");
    const menu_box = document.querySelector(".menu_bar");
    const skill_page = document.querySelector(".skills_page");
    const close_page = document.querySelector(".close_page");
    const contact = document.querySelector("#contact-container");
    const info_c = document.querySelector("#contact-info");
    const close_pages = document.querySelectorAll(".close_page");
    const bod = document.querySelector("html");
    const land_two = document.querySelector(".landing_page #second_flex");
    const body = document.querySelector("body");

    var expanded = false;
    const what = document.querySelectorAll(".landing_page .test");
    console.log(bod.clientHeight)
    what.forEach((item, index) => {
        var duration = Math.random() * (40 - 30) + 20;
        // var where = Math.random() * ((bod.clientHeight - 150) - 5) + 5;
        var where = Math.random() * (90);
        var del = Math.random() * (30-0) + 0;
        var scale = index * .5;
        item.style.top = `${where}vh`;
        item.style.setProperty('--scale', scale);
        item.style.animation = `test-box ${duration}s linear infinite`;
        item.style.animationDelay = `${del}s`;
    });

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

    proj.addEventListener("click", () => {
            proj_page.classList.add("open");
            expand.innerHTML = "Menu";
            toggleElement(proj, "0", "hide");
            toggleElement(cont, "0", "hide");
            toggleElement(skills, "0", "hide");
            toggleElement(resume, "0", "hide");
            expanded = !expanded;
            hb.classList.remove("show");
            land_two.classList.add("hide");
            menu_box.style = "opacity: 0; transition: 1s;";
    });

    skills.addEventListener("click", () => {
        skill_page.classList.add("open");
        expand.innerHTML = "Menu";
        toggleElement(proj, "0", "hide");
        toggleElement(cont, "0", "hide");
        toggleElement(skills, "0", "hide");
        toggleElement(resume, "0", "hide");
        expanded = !expanded;
        land_two.classList.add("hide");
        hb.classList.remove("show");
        menu_box.style = "opacity: 0; transition: 1s;";
    });

    close_pages.forEach(close_page => {
        close_page.addEventListener("click", () => {
            if(proj_page.classList.contains("open")) {
                proj_page.classList.remove("open");
                land_two.classList.remove("hide");
            }
            if(skill_page.classList.contains("open")) {
                skill_page.classList.remove("open");
                land_two.classList.remove("hide");
            }
            expand.innerHTML = "Close";
            toggleElement(proj, "100px", "show");
            toggleElement(cont, "400px", "show");
            toggleElement(skills, "200px", "show");
            toggleElement(resume, "300px", "show");
            hb.classList.add("show");
            menu_box.style = "opacity: 100%; transition: 1s;";
            expanded = !expanded;
        });
    });

    cont.addEventListener("click", () => {
        contact.classList.add("show");
    });

    contact.addEventListener("click", (e) => {
        body.style.overflow = "hidden";
        if (!info_c.contains(e.target))
            {
                contact.classList.remove("show");
            }
    });
    resume.addEventListener("click", () => {
        window.open("Images/Resume_Nathan_Deas.pdf", "_blank");
    });
});