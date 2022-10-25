import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-bootstrap/lib/Navbar";

const Header = () => {

   const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log(offset); 

   return (
      <nav className="navbar navbar-expand-md bg-transparent fixed-top">
         <div className="container-fluid">
            <Link to="" className="navbar-brand fs-3 text-light" >
               <img src="images/logo.png" alt="" style={{width:'85px'}} />
               Gain Talent
            </Link>
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon text-light"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
               <ul className="navbar-nav fs-6 fw-semibold gap-lg-4 gap-md-2 bg-lg-dark">
                  <li className="nav-item">
                     <Link to="" className="nav-link text-light" aria-current="page">
                        Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="" className="nav-link text-light" >
                        Features
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="" className="nav-link text-light" >
                        Pricing
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="" className="nav-link text-light" >
                        Register
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="" className="nav-link text-light" >
                        Log in
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Header;
