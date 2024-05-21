import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StudentRegisteration from "./pages/students/StudentRegisteration";
import StudentPage from "./pages/students/StudentPage";
import StudentsRent from "./pages/students/StudentsRent";
import DriversPage from "./pages/Drivers/DriversPage";
import DriversRegisteration from "./pages/Drivers/DriversRegisteration";
import DriverSalary from "./pages/Drivers/DriverSalary";
import { Toaster } from 'react-hot-toast'
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import axios from "axios";


const App = () => {

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    axios.get('/api/auth/me', { withCredentials: true })
      .then(res => {
        setAuthUser(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={authUser ? <Dashboard /> : <Navigate to={'/login'} />} />
          <Route path="/addstudents" element={authUser ? <StudentRegisteration /> : <Navigate to={'/login'} />} />
          <Route path="/studentslist" element={authUser ? <StudentPage /> : <Navigate to={'/login'} />} />
          <Route path="/studentsrent" element={authUser ? <StudentsRent /> : <Navigate to={'/login'} />} />
          <Route path="/add_drivers" element={authUser ? <DriversRegisteration /> : <Navigate to={'/login'} />} />
          <Route path="/driverslist" element={authUser ? <DriversPage /> : <Navigate to={'/login'} />} />
          <Route path="/driverssalary" element={authUser ? <DriverSalary /> : <Navigate to={'/login'} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;