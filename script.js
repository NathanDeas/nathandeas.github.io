document.addEventListener("DOMContentLoaded", () => {
    const open_project = document.querySelector("#m_projects");
    const open_skills = document.querySelector("#m_skills");
    const open_contact = document.querySelector("#m_contact");

    const project_page = document.querySelector(".proj_page");
    const skills_page = document.querySelector(".skills_page");

    const homepage = document.querySelector(".homepage");

    const close_pages = document.querySelectorAll(".close_page");
    const resume = document.querySelector("#m_resume");


    const contact_p = document.querySelector(".contact_page");
    const backdrop = document.querySelector(".backdrop");

    const body_elem = document.querySelector("body");




    //CALCULATING HEIGHT OF ELEMENT
    elemHeight = project_page.clientHeight;
    project_page.style.setProperty('--top_pos', `-${elemHeight}px`)
    console.log(elemHeight);

    //BACKGROUND SQUARE ANIMATIONS
    const shape = document.querySelectorAll(".background_motion .back_square");
    shape.forEach((item, index) => {
        var duration = Math.random() * (40 - 30) + 20;
        var where = Math.random() * (100);
        var del = Math.random() * (30-0) + 0;
        var scale = index * .5;
        item.style.left = `${where}vw`;
        item.style.setProperty('--scale', scale);
        item.style.animation = `test-box ${duration}s linear infinite`;
        item.style.animationDelay = `${del}s`;
    });

    //GITHUB LINK ON PROJECTS PAGE
    // document.querySelectorAll(".img_container").forEach((container) => {
    //     const gitLink = container.querySelector("a");
      
    //     container.addEventListener("mouseover", () => {
    //         gitLink.classList.add("show");
    //     });
      
    //     container.addEventListener("mouseleave", () => {
    //         gitLink.classList.remove("show");
    //     });
    //   });

      //OPENING PROJECT PAGE
      open_project.addEventListener("click", () => {
        homepage.classList.add("transition_out");
        project_page.classList.add("show");
        // project_page.style.transform = `translateY(-${elemHeight}px)`;
      });

      open_skills.addEventListener("click", () => {
        homepage.classList.add("transition_out");
        skills_page.classList.add("show");
        // project_page.style.transform = `translateY(-${elemHeight}px)`;
      });

      //CLOSING THE PAGE
    close_pages.forEach((close_page) => { 
        close_page.addEventListener("click", () => { 
            if (project_page.classList.contains("show")) { 
                project_page.classList.remove("show");
                homepage.classList.remove("transition_out"); 
            } 
            if (skills_page.classList.contains("show")) { 
                skills_page.classList.remove("show"); 
                homepage.classList.remove("transition_out"); 
            } 
            if (contact_p.classList.contains("show")) { 
                contact_p.classList.remove("show"); 
                homepage.classList.remove("transition_out"); 
                body_elem.classList.remove("scrolling");

            }
        }); 
    });

      //OPEN RESUME
      resume.addEventListener("click", () => {
        window.open("Images/Nathan_Deas_Resume.pdf", "_blank");
    });


    open_contact.addEventListener("click", () => {
        homepage.classList.add("transition_out");
        contact_p.classList.add("show");
        body_elem.classList.add("scrolling");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});