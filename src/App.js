
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import RegisterPage from './pages/register';
import Carlisting from "./pages/Carlisting";
import Cardescription from "./pages/Cardescription";
import CarForm from "./pages/postcar";
import Login from "./pages/loginpage";
// import { BrowserRouter as Router, Route,  } from "react-router-dom";

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}/>
        <Route path="carlisting" element={<Carlisting/>}/>
        <Route path="cardescription" element={<Cardescription/>}/>
        <Route path="postcar" element={<CarForm/>}/>
        
      </Route>
      <Route path="register" element={<RegisterPage />}/>
      <Route path="login" element={<Login />}/>
    </>
    
  ))
  return (
    <RouterProvider router={router} />
  );
}

export default App;
