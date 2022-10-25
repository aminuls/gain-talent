import React from "react";
import Card from "react-bootstrap/Card";
import { FaVuejs, FaReact } from "react-icons/fa";
import { SiAdobelightroom, SiAdobephotoshop } from "react-icons/si";
import { DiDatabase } from "react-icons/di";

const TechCard = () => {
   return (
      <div className="container mb-5 position-relative" style={{ bottom: "calc(0.5rem + 12vw)", zIndex: "1" }}>
         <Card className="border-0 rounded-4 shadow-lg" style={{ backgroundColor: "#f7eaea" }}>
            <div>
               <h2 className="display-5 mb-0 pt-2">Popular Topics</h2>
            </div>
            <Card.Body className="d-flex justify-content-evenly align-items-center flex-wrap" style={{ height: "calc(6rem + 10vw)" }}>
               <div className="rounded-circle bg-light shadow-lg d-flex justify-content-center align-items-center position-relative" style={{ height: "calc(1.7rem + 6vw)", width: "calc(1.7rem + 6vw)", top: "-2.5rem" }}>
                  <FaReact className="display-3 shadow-lg bg-dark rounded-4 text-info"></FaReact>
               </div>
               <div className="rounded-circle bg-light shadow-lg d-flex justify-content-center align-items-center position-relative" style={{ height: "calc(1.7rem + 6vw)", width: "calc(1.7rem + 6vw)", top: "1.5rem" }}>
                  <SiAdobelightroom className="display-3 shadow-lg bg-info rounded-4 text-dark"></SiAdobelightroom>
               </div>
               <div className="rounded-circle bg-light shadow-lg d-flex justify-content-center align-items-center position-relative" style={{ height: "calc(1.7rem + 6vw)", width: "calc(1.7rem + 6vw)", top: "-1.5rem" }}>
                  <FaVuejs className="display-3 shadow-lg bg-success rounded-circle"></FaVuejs>
               </div>
               <div className="rounded-circle bg-light shadow-lg d-flex justify-content-center align-items-center position-relative" style={{ height: "calc(1.7rem + 6vw)", width: "calc(1.7rem + 6vw)", top: "1.5rem" }}>
                  <SiAdobephotoshop className="display-3 shadow-lg bg-info rounded-4 text"></SiAdobephotoshop>
               </div>
               <div className="rounded-circle bg-light shadow-lg d-flex justify-content-center align-items-center position-relative" style={{ height: "calc(1.7rem + 6vw)", width: "calc(1.7rem + 6vw)", top: "-2rem" }}>
                  <DiDatabase className="display-3 shadow-lg bg-info rounded-circle text"></DiDatabase>
               </div>
            </Card.Body>
         </Card>
      </div>
   );
};

export default TechCard;
