export const navigator = () =>{
    const seeStory = document.querySelectorAll('.seeStory')

    seeStory.forEach(B =>{
        B.addEventListener('click', ()=>{
            window.location.href = "success-story.html";
        })
    })
}