import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MdCheckCircle } from "react-icons/md";
import { HiXCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const Packages = () => {
   const [pack, setPack] = useState(null);
   useEffect(() => {
      fetch("https://gain-talent-server.vercel.app/package")
         .then((res) => res.json())
         .then((data) => setPack(data));
   }, []);
   console.log(pack?.services);
   return (
      <div className="position-relative mb-5 pb-5" style={{ top: "calc(0.5rem + 2vw)" }}>
         <div className="pb-4">
            <h2 className="display-5">Packages For You</h2>
         </div>
         <Row xs={1} md={2} lg={3} className="g-4 container mx-auto">
            {pack?.packages.map((packages, idx) => (
               <Col key={idx}>
                  <Card className="rounded-3 h-100 p-1">
                     {/* {console.log(singleClass)} */}
                     <Card.Body className="pb-2">
                        <Card.Title className="display-6 fw-normal">{packages.package_name}</Card.Title>
                        <Card.Text className="fs-2 text-muted">${packages.price}</Card.Text>
                        <div className="text-start">
                           <ul className="text-decoration-none fw-semibold fs-6 mt-4" style={{ listStyleType: "none" }}>
                              {packages === "Free"
                                 ? pack?.package_free.map((service, idx) => (
                                      <div className="d-flex align-items-baseline gap-2 mt-3">
                                         <div>
                                            {service.status ? (
                                               <MdCheckCircle className="text-success" style={{ width: "22px", height: "22px" }}></MdCheckCircle>
                                            ) : (
                                               <HiXCircle className="text-danger" style={{ width: "24px", height: "24px" }}></HiXCircle>
                                            )}
                                         </div>
                                         <li key={idx}>{service.option}</li>
                                      </div>
                                   ))
                                 : packages === "Standard"
                                 ? pack?.package_standard.map((service, idx) => (
                                      <div className="d-flex align-items-baseline gap-2 mt-3">
                                         <div>
                                            {service.status ? (
                                               <MdCheckCircle className="text-success" style={{ width: "22px", height: "22px" }}></MdCheckCircle>
                                            ) : (
                                               <HiXCircle className="text-danger" style={{ width: "24px", height: "24px" }}></HiXCircle>
                                            )}
                                         </div>
                                         <li key={idx}>{service.option}</li>
                                      </div>
                                   ))
                                 : pack?.package_premium.map((service, idx) => (
                                      <div className="d-flex align-items-baseline gap-2 mt-3">
                                         <div>
                                            <MdCheckCircle className="text-success" style={{ width: "22px", height: "22px" }}></MdCheckCircle>
                                         </div>
                                         <li key={idx}>{service.option}</li>
                                      </div>
                                   ))}
                           </ul>
                        </div>
                     </Card.Body>
                     <Card.Footer className="border-0 bg-transparent d-flex justify-content-between w-100">
                        <Button className="w-100 fw-semibold" variant="danger">
                           Add To Cart
                        </Button>
                     </Card.Footer>
                  </Card>
               </Col>
            ))}
         </Row>
      </div>
   );
};

export default Packages;
