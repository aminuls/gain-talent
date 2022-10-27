import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLoaderData } from "react-router-dom";
import ReactPrint from 'react-to-print';
import { useRef } from 'react';


const ClassDetails = () => {
   const ref = useRef()
   const singleClass = useLoaderData();
   const { author, banner, category, title, class_quantity, course_name, description, id } = singleClass;
   console.log(singleClass);
   return (
      <div>
         <div className="w-100 bg-dark" style={{ height: "100px" }}></div>
         <div className="position-relative container my-5">
            <Row xs={1} className="mx-auto">
               <Col>



                  <div className="d-flex justify-content-between justify-content-lg-end gap-3 w-100 mb-3">
                     <button>Get Premium Access</button>
                     <ReactPrint trigger={()=><button>Downlod PDF</button>} content={()=>ref.current} />
                  </div>


                  <Card ref={ref} className="rounded-3 h-100 border-0 text-start">
                     {/* {console.log(singleClass)} */}
                     <Card.Title className="fs-3 mb-3">{title}</Card.Title>
                     <Card.Img src={banner} variant="top" className="rounded-3 img-fluid" style={{ height: "calc(9rem + 15vw)" }} />
                     <Card.Body className="pb-2">
                        <Card.Text className="fs-5 fw-semibold mb-2">{description}</Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                           <Card.Text className="text-secondary fs-6">
                              <div>Create By</div>
                              <div className="fw-semibold">{author}</div>
                           </Card.Text>
                           <div className="text-end">
                              <Card.Text className="m-0 fw-semibold">{course_name}</Card.Text>
                              <Card.Text className="m-0 fw-semibold">Class: {class_quantity}</Card.Text>
                           </div>
                        </div>
                     </Card.Body>
                     <Card.Footer className="border-0 bg-transparent">
                        <h4>Description:</h4>
                        <Card.Text className="fw-semibold">{singleClass?.brief_des}</Card.Text>
                        <div>
                           {singleClass?.brief_ul.map((u) => (
                              <div className="fw-semibold">
                                 <ul style={{ listStyleType: "circle" }}>
                                    <li>{u}</li>
                                 </ul>
                              </div>
                           ))}
                        </div>
                     </Card.Footer>
                  </Card>
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default ClassDetails;
