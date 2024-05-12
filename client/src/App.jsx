import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addstudents" element={<StudentRegisteration />} />
          <Route path="/studentslist" element={<StudentPage />} />
          <Route path="/studentsrent" element={<StudentsRent />} />
          <Route path="/adddrivers" element={<DriversRegisteration />} />
          <Route path="/driverslist" element={<DriversPage />} />
          <Route path="/driverssalary" element={<DriverSalary />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;