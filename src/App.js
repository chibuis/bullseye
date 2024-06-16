
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import RegisterPage from './pages/register';
import Carlisting from "./pages/Carlisting";
import Cardescription from "./pages/Cardescription";
import DashboardAdmin from "./pages/postcar";
import Login from "./pages/loginpage";
import Search from "./pages/search";
import DateField from "./pages/paymentDate";
import CarPost from "./pages/Addcar";
// import { BrowserRouter as Router, Route,  } from "react-router-dom";

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import NavbarAdmin from "./pages/navbarAdmin";

const isLoggedIn = true

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={isLoggedIn ? <NavbarAdmin /> : <Navbar />}>
        <Route index element={<Home />}/>
        
        <Route path="postcar" element={<DashboardAdmin/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="date" element={<DateField/>}/>
        <Route path="carpost" element={<CarPost/>}/>
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
