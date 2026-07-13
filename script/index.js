/* .............HAMBUGER ACTION KEY.............. */


// HAMBURGER MENU
export const mobileNav = () =>{
    const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
}


// SERVICES DROPDOWN
const servicesBtn = document.getElementById("navlinkser");
const servicesList = document.getElementById("sevlist");

if(servicesBtn){
    servicesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    servicesList.classList.toggle("active");
});
}








/* .............start section............... */

export const count = () => {
    const counters = document.querySelectorAll(".counter");
   if(!counters)return
    const startCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCounter = () => {
            const increment = target / 100;

            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                const counter = entry.target;

                if (!counter.classList.contains("counted")) {
                    startCounter(counter);
                    counter.classList.add("counted");
                }

            }

        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}







/* .............navbar(our services(mouseleave&out))............... */

const navlink = document.getElementById("navlinkser");
const navlist = document.getElementById("sevlist");
let isOpen = false


if(navlink){
    navlink.addEventListener("mouseenter", () => {
    navlist.style.display = "flex";
});

navlink.addEventListener("mouseleave", () => {
    navlist.style.display = "none";
});

}







/* .............visa form filling ............... */

const form = document.getElementById("visaForm");

// Prevent past dates
const dateInput = document.querySelector('input[type="date"]');
const today = new Date().toISOString().split("T")[0];
if (dateInput) {
    dateInput.setAttribute("min", today);
}

if (form) {

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("✅ Your visa profile has been submitted!");

        form.reset();
    });

}




