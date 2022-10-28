import React from "react";

const Blog = () => {
   return (
      <div className="mb-5 pb-5">
         <div className="w-100 bg-dark" style={{ height: "100px" }}></div>
         <div className="mt-4">
            <h2 className="display-5">Blog Page</h2>
         </div>
         <div className="my-4 container text-start">
            <div className="accordion d-flex flex-column gap-3" id="accordionExample">
               <div className="accordion-item border border-5 rounded-0">
                  <h2 className="accordion-header" id="headingOne">
                     <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What is CORS?
                     </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                     <div className="accordion-body fw-semibold">
                        Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed
                        cross-origin images, stylesheets, scripts, iframes, and video
                     </div>
                  </div>
               </div>
               <div className="accordion-item border border-5 rounded-0">
                  <h2 className="accordion-header" id="headingTwo">
                     <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Why are you using firebase? What other options do you have to implement authentication?
                     </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                     <div className="accordion-body fw-semibold">
                        Firebase is a authentication system. In many website we need user information to keep the data in our database. So then we need to create authentication system. But it is not possible for a person or a small company to build a authentication system that unhackable. So we can use firebase. For the authentication we have to use it. There are many authentication methods in it line password based authentication, Biometric authentication, token based
                        authentication, google/github,facebook and so on authentication.
                     </div>
                  </div>
               </div>
               <div className="accordion-item border border-5 rounded-0">
                  <h2 className="accordion-header" id="headingThree">
                     <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How does the private router works?
                     </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                     <div className="accordion-body fw-semibold">
                        Basically private router protect or safe a path that cannot be possible without login/registering. Just think is it possible to order a item from any website without knowing your any kind of information. No, it Doesn't. So we
                        need to use private route to protect our soma path. If user login/register the website then it allow the user to go to the path or do something.
                     </div>
                  </div>
               </div>
               <div className="accordion-item border border-5 rounded-0">
                  <h2 className="accordion-header" id="headingThree">
                     <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        What is node? How does the node works?
                     </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                     <div className="accordion-body fw-semibold">
                        It is a basic unit of a data structure, such as a linked list or tree data structure. Node contain data and also may link to other nodes. Links between nodes are often implement by pointers. It is a used as backend service
                        where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable,
                        lightweight, fast, and data-intensive.
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Blog;
