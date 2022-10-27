import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Cards = ({ classes, title }) => {
   // console.log(classes);
   return (
      <div className="position-relative" style={{ bottom: "calc(1rem + 5vw)" }}>
         <div className="pb-4">
            <h2 className="display-5">{title}</h2>
         </div>
         <Row xs={1} md={2} lg={3} className="g-4 mx-auto">
            {classes.map((singleClass, idx) => (
               <Col key={idx}>
                  <Card className="rounded-3 h-100 p-1">
                     {/* {console.log(singleClass)} */}
                     <Card.Img variant="top" className="rounded-3" src={singleClass.banner} />
                     <Card.Body className="pb-2">
                        <Card.Title className="text-start">{singleClass.title}</Card.Title>
                        <Card.Text className="text-start mb-2">
                           {singleClass.description.slice(0, 55) + "..."}
                           <Link to="" className="text-decoration-none">
                              Read More
                           </Link>
                        </Card.Text>
                        <Card.Text className="text-start text-secondary fs-6">
                           Created By <span className="fw-semibold">{singleClass.author}</span>
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer className="border-0 bg-transparent">
                        <Link to={`/classdetails/${singleClass.id}`}><Button className="w-100 fw-semibold" variant="danger">
                           See Details
                        </Button></Link>
                        <div className="d-flex mt-3 justify-content-between w-100">
                           <h5 className="mt-0">{singleClass.course_name}</h5>
                           <h5 className="mt-0">Class: {singleClass.class_quantity}</h5>
                        </div>
                     </Card.Footer>
                  </Card>
               </Col>
            ))}
         </Row>
      </div>
   );
};

export default Cards;
