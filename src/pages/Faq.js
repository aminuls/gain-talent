import React from "react";

const Faq = () => {
   return (
      <div className="mb-5 pb-5">
         <div className="w-100 bg-dark" style={{ height: "100px" }}></div>
         <div className="mt-4">
            <h2 className="display-5">FAQ Page</h2>
         </div>
         <div className="my-4 container text-start">
            <div className="accordion d-flex flex-column gap-3" id="accordionExample">
               <div className="accordion-item border border-5 rounded-0">
                  <h2 className="accordion-header" id="headingOne">
                     <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Who should take an Online Course?
                     </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                     <div className="accordion-body fw-semibold">
                        Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can Advance your skill-set or begin a career change. Take the next step in your
                        formal education. Ease the transition before entering a full-time academic program. Enjoy learning a new topic. Whatever the reason, our online courses are a flexible way of learning about the art world without disrupting your
                        daily life.
                     </div>
                  </div>
               </div>
               <div className="accordion-item border border-5 rounded-0">
                  <h2 className="accordion-header" id="headingTwo">
                     <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How do I select a course?
                     </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                     <div className="accordion-body fw-semibold">
                        Visit the course catalog to browse our offerings. In addition to searching by course duration and availability, you can also search by subject to ensure you find a course that reflects your interests. Though it is not
                        required, we encourage those who have not studied art before to consider taking an art history course first to get a solid grounding in the discipline before exploring more specific disciplines. Our art history courses are the
                        perfect first step before moving on to art market courses.
                     </div>
                  </div>
               </div>
               <div className="accordion-item border border-5 rounded-0">
                  <h2 className="accordion-header" id="headingThree">
                     <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        I am a high school student, can I join?
                     </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                     <div className="accordion-body fw-semibold">Courses are open to all students 18 years or older. If you are under 18 years old, please contact us (online@sothebysinstitute.com) to discuss further.</div>
                  </div>
               </div>
               <div className="accordion-item border border-5 rounded-0">
                  <h2 className="accordion-header" id="headingThree">
                     <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Can I take more than one course at a time?
                     </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                     <div className="accordion-body fw-semibold">
                        If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Faq;
