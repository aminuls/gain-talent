import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
      });
      return () => {
         unsubscribe();
      };
   }, []);

   const providerLogin = (provider) => {
      return signInWithPopup(auth, provider);
   };

   const createUserByMail = (auth, email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const AuthInfo = { user, setUser, providerLogin, createUserByMail };
   return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
