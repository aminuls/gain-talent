import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import Checkout from "./pages/Checkout";
import ClassDetails from "./pages/ClassDetails";
import Classes from "./pages/Classes";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Main></Main>,
         children: [
            {
               path: "/",
               element: <Home></Home>,
               loader: async () => {
                  return fetch("https://gain-talent-server.vercel.app/popular");
               },
            },
            {
               path: "/classes",
               element: <Classes></Classes>,
               loader: async () => {
                  return fetch("https://gain-talent-server.vercel.app/classes");
               },
            },
            {
               path: "/classdetails/:id",
               element: <ClassDetails></ClassDetails>,
               loader: async ({ params }) => {
                  return fetch(`https://gain-talent-server.vercel.app/classdetails/${params.id}`);
               },
            },
            {
               path: "/login",
               element: <Login></Login>,
            },
            {
               path: "/register",
               element: <Register></Register>,
            },
            {
               path: "/faq",
               element: <Faq></Faq>,
            },
            {
               path: "/blog",
               element: <Blog></Blog>,
            },
            {
               path: "/checkout/:id",
               element: (
                  <ProtectedRoute>
                     <Checkout></Checkout>
                  </ProtectedRoute>
               ),
               loader: async ({ params }) => {
                  return fetch(`https://gain-talent-server.vercel.app/classdetails/${params.id}`);
               },
            },
         ],
      },
      {
         path: "*",
         element: <Error></Error>,
      },
   ]);
   return (
      <div className="App">
         <RouterProvider router={router}></RouterProvider>
      </div>
   );
}

export default App;
