// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDDJQq16BlBOs_khXfnGED-IwpcEaDhyjE",
   authDomain: "gain-talent.firebaseapp.com",
   projectId: "gain-talent",
   storageBucket: "gain-talent.appspot.com",
   messagingSenderId: "626145259772",
   appId: "1:626145259772:web:cc5d35ad34303b9a61a779",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
