import { getAuth, GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import app from "../firebase/firebase.init";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const auth = getAuth(app);
const Login = () => {
   const {setUser, providerLogin, setLoading} = useContext(AuthContext);
   const [error, setError] = useState(null);
   const [success, setSuccess] = useState(false);
   const [userEmail, setUserEmail] = useState(null);
   const googleProvider = new GoogleAuthProvider()
   const githubProvider = new GithubAuthProvider();

   const navigate = useNavigate();
   // console.log("from ai to better ", navigate);

   const location = useLocation();
   console.log("from login", location);
   const from = location.state?.from?.pathname || "/";

   const handleGoogle = () =>{
      providerLogin(googleProvider)
      .then((result)=>{
         const user = result.user;
         setUser(user);
         navigate(from, { replace: true });
      })
      .catch((error)=>{
         console.log(error);
      })
   }

   const handleGithub = () =>{
      providerLogin(githubProvider)
      .then((result)=>{
         const user = result.user;
         setUser(user);
         navigate(from, { replace: true });
      })
      .catch((error)=>{
         console.log(error);
      })
   }


   const handleSubmit = (event) => {
      event.preventDefault();
      setLoading(true);
      setSuccess(false);
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      signInWithEmailAndPassword(auth, email, password)
         .then((result) => {
            const user = result.user;
            setUser(user);
            // console.log(user);
            setSuccess(true);
            navigate(from, { replace: true });
         })
         .catch((error) => {
            setError(error.message);
            console.error("error", error);
         });
   };

   const handleForget = () => {
      if (!userEmail) {
         alert("Please Enter your email address");
         return;
      }
      sendPasswordResetEmail(auth, userEmail)
         .then(() => {
            alert("Password reset email sent. Please check your email!");
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const handleEmailBlur = (event) => {
      const email = event.target.value;
      setUserEmail(email);
   };

   return (
      <div>
         <div className="w-100 bg-dark" style={{ height: "100px" }}></div>

         <div className="mx-auto mt-5 container row row-cols-1 row-cols-md-2 my-5 py-5 align-items-start">
            <div className="col-12 col-md-8 d-flex flex-column justify-content-center align-items-center">
               <div className="text-lg-start">
                  <h1 className="display-3 mb-4">Please Login!</h1>
                  <h2 className="display-4">Go Inside</h2>
               </div>
            </div>
            <div className="col-12 col-md-4">
               <form onSubmit={handleSubmit} className="fw-semibold">
                  <div className="mb-3 text-start">
                     <label htmlFor="formGroupExampleInput" className="form-label">
                        Email address
                     </label>
                     <input onBlur={handleEmailBlur} name="email" type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter email" required />
                  </div>
                  <div className="mb-3 text-start">
                     <label htmlFor="formGroupExampleInput2" className="form-label">
                        Password
                     </label>
                     <input name="password" type="password" className="form-control" id="formGroupExampleInput2" placeholder="Password" required />
                  </div>
                  <div>
                     <p className="text-danger">{error}</p>
                  </div>
                  <div>
                     <button className="btn btn-primary px-3" type="submit">
                        Log in
                     </button>
                  </div>
               </form>
               {success && <p>Successfully Login to the account</p>}
               <p className="text-center mt-3">
                  New to this website? Please <Link to="/register">Register</Link>
               </p>
               <p className="text-center mt-3">
                  Forget Password? Please
                  <button type="button" onClick={handleForget} className="btn btn-link p-1 pb-2">
                     reset
                  </button>
               </p>
               <div className="d-flex justify-content-center gap-1">
                  <button onClick={handleGoogle} className="border-0 bg-transparent p-2">
                     <BsGoogle className="fs-2"></BsGoogle>
                  </button>
                  <button onClick={handleGithub} className="border-0 bg-transparent p-2">
                     <BsGithub className="fs-2"></BsGithub>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
