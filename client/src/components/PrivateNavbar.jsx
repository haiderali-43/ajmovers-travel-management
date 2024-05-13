
import logo from "/logo.jpg"

import { Link, useNavigate } from 'react-router-dom'




import PropTypes from 'prop-types';
import DropdownMenu from "./DropDeownMenu";
import axios from "axios";
import toast from "react-hot-toast";



const PrivateNavbar = ({ btnone }) => {
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/auth/logout")
            console.log(response.data)
            toast.success("User logged out successfully");
            navigate("/login")
        } catch (error) {
            console.log(error.message);
        }
    }



    return (
        <div className="border-b-2 shadow-md relative top-0">
            <div className="flex justify-between px-4 py-1">
                <Link to="/dashboard">
                    <div className="flex space-x-2">
                        <img
                            src={logo}
                            alt="logo"
                            width={50}
                            height={30}
                            className="rounded-[50%] mt-1 hidden md:block"
                        />
                        <img
                            src={logo}
                            alt="logo"
                            width={40}
                            height={20}
                            className="rounded-[50%] mt-2 md:hidden"
                        />
                        <span className="mt-2 text-xl md:text-2xl font-semibold hidden md:block">AJ Movers</span>
                    </div>
                </Link>
                <div className="">
                    <div className="text-xl mt-2 mr-5 ">
                        <DropdownMenu />

                    </div>
                </div>
                <div>
                    <div className=" mt-2 text-white font-semibold  ">
                        <form onSubmit={handleLogout} >
                            <button className="  bg-slate-400 px-4 py-2 rounded-md hover:bg-slate-500 transition duration-100 ">
                                {btnone}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


PrivateNavbar.propTypes = {
    btnone: PropTypes.string.isRequired,
};


export default PrivateNavbar
