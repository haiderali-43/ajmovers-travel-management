import { Link, useNavigate, } from "react-router-dom";
import logo from "/logo.jpg";
import { useState } from "react";
import 'react-toastify/ReactToastify.css'
import { toast } from "react-hot-toast";
import axios from "axios";


const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/auth/login", { email, password })
      navigate("/dashboard")
      console.log(response.data)
      toast.success("User logged in successfully")
    } catch (error) {
      console.error(error)
      toast.error("Invalid credentials")

    }
  }






  const handleShowpassword = () => {
    const password = document.getElementById("password")
    if (password.type === "password") {
      password.type = "text"
    } else {
      password.type = "password"
    }
  }
  return (
    <div className="max-w-md mx-auto mt-30 rounded-md">
      <div className="flex space-x-2 mb-8 justify-center">
        <img src={logo} alt="" width={100} height={100} />
        <h1 className="text-5xl font-bold text-center mt-5">Login</h1>
      </div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
          <p onClick={handleShowpassword} className="cursor-pointer">Show</p>

        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer border-2 border-blue-500" type="submit">Login</button>
          <button className=" hover:bg-blue-700 border-2 border-blue-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer hover:text-white">
            <Link to={"/register"}>
              Register
            </Link>
          </button>
        </div>
      </form>

    </div>
  );
};

export default Login;
