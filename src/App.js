import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Main></Main>,
         children: [
            {
               path: "/",
               element: <Home></Home>,
               loader: async()=>{
                  return fetch("https://gain-talent-server.vercel.app/classes")
               }
            },
            {
               path: "/register",
               element: <Register></Register>,
            },
            {
               path: "/login",
               element: <Login></Login>,
            },
         ],
      },
   ]);
   return (
      <div className="App">
         <RouterProvider router={router}></RouterProvider>
      </div>
   );
}

export default App;
