
import logo from "/logo.jpg"

import { Link } from 'react-router-dom'




import PropTypes from 'prop-types';
import DropdownMenu from "./DropDeownMenu";



const PrivateNavbar = ({ btnone }) => {



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
                        <button className="  bg-slate-400 px-4 py-2 rounded-md hover:bg-slate-500 transition duration-100 ">
                            {btnone}
                        </button>
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
