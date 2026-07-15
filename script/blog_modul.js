export const blog_content = () => {

    const blogData = {
  visa2026: {
    title: "Canada Student Visa Requirements For 2026 Applicants",
    image: "utils/images/canada-study.jpg",
    body: `
      <p>
        Applying for a Canadian student visa in 2026 requires careful planning.
        Before submitting your application, ensure you have received your
        official Letter of Acceptance from a Designated Learning Institution (DLI).
      </p>

      <h3>Documents Required</h3>

      <ul>
        <li>Valid International Passport</li>
        <li>Letter of Acceptance</li>
        <li>Proof of Funds</li>
        <li>Medical Examination (if required)</li>
        <li>Police Clearance (where applicable)</li>
        <li>Statement of Purpose</li>
      </ul>

      <p>
        Preparing these documents correctly greatly improves your chances
        of a successful application.
      </p>
    `
  },

 visaInterview:{

    title:"How To Prepare For Your Visa Interview",

    image:"utils/images/human-resources-employees-verifying-candidate-resume-before-agreeing-terms.jpg",

    body:`

    <p>
    A visa interview is often one of the most important stages of your travel application. Being well prepared can increase your confidence and help you present your case clearly.
    </p>

    <h3>Before Your Interview</h3>

    <ul>
        <li>Review every detail of your application.</li>
        <li>Carry all required supporting documents.</li>
        <li>Dress neatly and professionally.</li>
        <li>Arrive at least 30 minutes early.</li>
    </ul>

    <h3>During The Interview</h3>

    <p>
    Answer every question honestly and confidently. Listen carefully before responding, maintain eye contact, and avoid giving unnecessary information. Consistency between your answers and your documents is very important.
    </p>

    <p>
    At Paveway Travels & Tours, we help our clients prepare for visa interviews through document reviews and interview guidance so they can attend with confidence.
    </p>

    `

},

  travelTips: {
    title: "7 Things To Prepare Before Your International Trip",
    image: "utils/images/top-view-travel-kit-essentials.jpg",
    body: `
      <ol>
        <li>Check Passport Validity</li>
        <li>Confirm Visa Approval</li>
        <li>Buy Travel Insurance</li>
        <li>Book Accommodation</li>
        <li>Prepare Foreign Currency</li>
        <li>Print Important Documents</li>
        <li>Arrive Early At The Airport</li>
      </ol>

      <p>
        These simple preparations can save you from unnecessary stress
        during your journey.
      </p>
    `
  }
};




const cards = document.querySelectorAll(".blog-card");
const modal = document.getElementById("blogModal");

const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalBody = document.getElementById("modalText");

const closeBtn = document.querySelector(".closeModal");


document.querySelectorAll(".readMoreBtn").forEach(button => {

    button.addEventListener("click", (e) => {

        e.stopPropagation();

        const card = button.closest(".blog-card");

        const key = card.dataset.blog;

        const post = blogData[key];

        modalTitle.textContent = post.title;
        modalImage.src = post.image;
        modalBody.innerHTML = post.body;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


closeBtn.addEventListener("click", () => {

    modal.classList.remove("active");

    document.body.style.overflow = "auto";

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});


document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});
}