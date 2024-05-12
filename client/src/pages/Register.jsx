import { Link } from "react-router-dom";
import logo from "/logo.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'
import axios from "axios";


import 'react-toastify/ReactToastify.css';


const Register = () => {
  const navigate = useNavigate()



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");





  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", { name, email, password })
      console.log(response.data)
      toast.success("User registered successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-30 rounded-md">
      <div className="flex space-x-2 mb-8 justify-center">
        <img src={logo} alt="" width={100} height={100} />
        <h1 className="text-5xl font-bold text-center mt-5">Register</h1>
      </div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleRegister}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer border-2 border-blue-500" type="submit">Register</button>
          <Link to="/login" className="hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer border-2 border-blue-500 hover:text-white ">Login</Link>
        </div>
      </form>
     
    </div>
  );
}

export default Register;
