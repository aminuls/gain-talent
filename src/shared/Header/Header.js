import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ReactTooltip from "react-tooltip";

const Header = () => {
   const { user, logOut } = useContext(AuthContext);
   const [offset, setOffset] = useState(0);
   const [toggleTheme, setToggleTheme] = useState(true);
   const [mobMenu, setmobMenu] = useState(false);

   const handleSignOut = () => {
      logOut()
         .then(() => {})
         .catch((error) => {
            console.log(error);
         });
   };

   useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   // console.log(offset);

   return (
      <nav className={`navbar navbar-expand-md fixed-top ${offset < 60 ? (mobMenu ? "bg-dark" : "bg-transparent") : "bg-dark"}`} style={{ transition: "all 0.5s 0s ease" }}>
         <div className="container-fluid">
            <Link to="" className="navbar-brand fs-3 text-light">
               <img src="../images/logo.png" alt="" style={{ width: "85px" }} />
               Gain Talent
            </Link>
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setmobMenu(!mobMenu)}>
               <span className="navbar-toggler-icon text-light"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
               <ul className="navbar-nav fs-6 fw-semibold gap-lg-4 gap-md-2 align-items-center">
                  <li className="nav-item">
                     <Link to="/" className="nav-link text-light" aria-current="page">
                        Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/classes" className="nav-link text-light">
                        Classes
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/faq" className="nav-link text-light">
                        FAQ
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/blog" className="nav-link text-light">
                        Blog
                     </Link>
                  </li>
                  {console.log(user)}
                  {user?.uid ? (
                     <>
                        <li className="nav-item">
                           <button onClick={handleSignOut} className="nav-link text-light bg-transparent border-0">
                              Log out
                           </button>
                        </li>
                        <li className="nav-item">
                           <img data-place="bottom" data-tip={user?.displayName} className="nav-link rounded-circle" style={{ height: "60px", width: "60px" }} src={user?.photoURL} alt="profile" />
                        </li>
                     </>
                  ) : (
                     <li className="nav-item">
                        <Link to="/login" className="nav-link text-light">
                           Log in
                        </Link>
                     </li>
                  )}
                  <li className="nav-item">
                     <button className="nav-link text-light bg-transparent border-0 w-100 justify-content-center" onClick={() => setToggleTheme(!toggleTheme)}>
                        {toggleTheme ? <MdLightMode style={{ height: "26px", width: "26px" }}></MdLightMode> : <MdDarkMode style={{ height: "26px", width: "26px" }}></MdDarkMode>}
                     </button>
                  </li>
               </ul>
            </div>
         </div>
         <ReactTooltip />
      </nav>
   );
};

export default Header;
