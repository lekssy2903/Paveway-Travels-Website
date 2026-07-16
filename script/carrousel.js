export const Carousel = () =>{
    const slider = document.getElementById("slider");

    if(!slider)return
document.querySelector(".next").onclick = () => {

    slider.scrollBy({
        left:370,
        behavior:"smooth"
    });

};

document.querySelector(".prev").onclick = () => {

    slider.scrollBy({
        left:-370,
        behavior:"smooth"
    });

};




}

export const successCarouse = () =>{
    const visaGrid = document.querySelector(".visa-grid");
const nextBtn = document.querySelector(".nexT");
const prevBtn = document.querySelector(".preV");

if(!nextBtn)return
nextBtn.addEventListener("click", () => {
   
    visaGrid.scrollBy({
        left: 350,
        behavior: "smooth"
    });
});

if(!prevBtn)return
prevBtn.addEventListener("click", () => {
    
    visaGrid.scrollBy({
        left: -350,
        behavior: "smooth"
    });
});
}