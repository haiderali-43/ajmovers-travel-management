
import { Link } from "react-router-dom";
import logo from "/logo.jpg"


// eslint-disable-next-line react/prop-types
const Navbar = ({ btnone, btntwo }) => {




  return (
    <div className="flex justify-between px-4 py-1 text-slate-200">
      <Link to="/">
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
            className="rounded-[50%] mt-1 md:hidden"
          />
          <span className="mt-2 text-2xl font-semibold">AJ Movers</span>
        </div>
      </Link>

      <div className=" mt-2 text-white font-semibold  ">
        <button className="  bg-slate-400 px-3 py-2 rounded-md hover:bg-slate-500 transition duration-100 " >
          <Link to="/login">{btnone}</Link>
        </button>

        <button className="ml-5 bg-slate-700 px-3 py-2 rounded-md hover:bg-slate-800 duration-100 transition-all  ">
          <Link to="/register" className="">
            {btntwo}
          </Link>{" "}
        </button>
      </div>
    </div>

  );
};

export default Navbar;
