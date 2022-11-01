import React from "react";
import { useLoaderData } from "react-router-dom";
// import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { MdPayments } from "react-icons/md";

const Checkout = () => {
   const singleClass = useLoaderData();
   return (
      <div>
         <div className="w-100 bg-dark" style={{ height: "100px" }}></div>

         <div className="container w-100 my-5">
            <div className="row row-cols-1 row-cols-md-2 g-4 w-100">
               <div className="col-12 col-md-8">
                  <div className="card">
                     <Row xs={1} md={2} className="g-1 mx-auto">
                        {singleClass?.id ? (
                           <>
                              <Col>
                                 <Card className="rounded-3 h-100 p-1 border-0">
                                    {/* {console.log(singleClass)} */}
                                    <Card.Img variant="top" className="rounded-3 h-100" src={singleClass?.banner} />
                                 </Card>
                              </Col>
                              <Col>
                                 <Card className="rounded-3 h-100 p-1 border-0">
                                    <Card.Body className="pb-2">
                                       <Card.Title className="text-start">{singleClass?.title}</Card.Title>
                                       <Card.Text className="text-start mb-2">
                                          {singleClass?.description?.slice(0, 55) + "..."}
                                          <Link to={`/classdetails/${singleClass?.id}`} className="text-decoration-none">
                                             Read More
                                          </Link>
                                       </Card.Text>
                                       <Card.Text className="text-start text-secondary fs-6">
                                          Created By <span className="fw-semibold">{singleClass?.author}</span>
                                       </Card.Text>
                                       <Card.Text className="text-start fs-4">Product id: {singleClass?.id}</Card.Text>
                                    </Card.Body>
                                 </Card>
                              </Col>
                           </>
                        ) : null}
                     </Row>
                  </div>
               </div>
               <div className="col-12 col-md-4">
                  <div className="card">
                     <div className="card-body">
                        <h1 className="card-title display-1 m-0">
                           <MdPayments></MdPayments>
                        </h1>
                        <form className="fw-semibold">
                           <div className="mb-3 text-start">
                              <label htmlFor="formGroupExampleInput" className="form-label">
                                 Name
                              </label>
                              <input name="name" type="text" className="form-control" id="formGroupExampleInput" placeholder="Your Name" required />
                           </div>
                           <div className="mb-3 text-start">
                              <label htmlFor="formGroupExampleInput2" className="form-label">
                                 Phone
                              </label>
                              <input name="phone" type="number" className="form-control" id="formGroupExampleInput2" placeholder="Phone" required />
                           </div>
                           <div className="mb-3 text-start">
                              <label htmlFor="formGroupExampleInput2" className="form-label">
                                 Trx Id
                              </label>
                              <input name="trxId" type="text" className="form-control" id="formGroupExampleInput2" placeholder="Trx Id" required />
                           </div>
                           <div>
                              <button className="btn btn-danger fw-semibold px-3 w-100" type="submit">
                                 Checkout
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Checkout;
