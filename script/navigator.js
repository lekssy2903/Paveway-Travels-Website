export const navigator = () =>{
    const seeStory = document.querySelectorAll('.seeStory')

    seeStory.forEach(B =>{
        B.addEventListener('click', ()=>{
            window.location.href = "success-story.html";
        })
    })
}


export const blog_faq = () =>{
    const faqs = document.querySelectorAll(".faq-item");

    if(faqs)
faqs.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqs.forEach(faq => {

            if (faq !== item) {
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});
}