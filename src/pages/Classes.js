import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";
import { ImRadioChecked2 } from "react-icons/im";

const Classes = () => {
   const allCourse = useLoaderData();
   console.log(allCourse);
   return (
      <div>
         <div className="w-100 bg-dark" style={{ height: "100px" }}></div>
         <div className="row">
            <div className="col-md-9" style={{ marginTop: "calc(2rem + 5vw)" }}>
               <Cards classes={allCourse} title="All Classes"></Cards>
            </div>
            <div className="d-none d-md-block col-md-3 ">
               <div className="mt-4">
                  <div>
                     <div>
                        <h2 className="display-6">All Classes</h2>
                     </div>
                     <div className="text-start">
                        {allCourse.map((course, idx) => (
                           <div key={idx} className="d-flex align-items-center">
                              <div>
                                 <ImRadioChecked2></ImRadioChecked2>
                              </div>
                              <div>
                                 <h6 className="my-3 mx-2">
                                    <Link to={`/classdetails/${course.id}`}>{course.title}</Link>
                                 </h6>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Classes;
