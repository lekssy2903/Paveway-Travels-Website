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