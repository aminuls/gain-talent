import React from "react";
import Carousel from "react-bootstrap/Carousel";

const SlideCaro = () => {
   return (
      <div className="position-relative">
         <Carousel>
            <Carousel.Item>
               <img className="d-block w-100" style={{ maxHeight: "85vh" }} src="images/banner8.jpg" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
               <img className="d-block w-100" style={{ maxHeight: "85vh" }} src="images/banner4.jpg" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
               <img className="d-block w-100" style={{ maxHeight: "85vh" }} src="images/banner10.jpg" alt="Third slide" />
            </Carousel.Item>
         </Carousel>
         <div className="mt-2 mt-md-0 position-absolute top-50 start-50 translate-middle m-0 w-75">
            <h2 className="text-warning w-100 text-start m-0" style={{fontSize:'calc(0.5rem + 5vw)', fontWeight:"400"}}>Explore More With</h2>
            <div className="text-info w-100 text-start m-0" style={{fontFamily:"cursive",fontSize:'calc(0.5rem + 5vw)', fontWeight:"400"}}>Creative classes</div>
         </div>
      </div>
   );
};

export default SlideCaro;
