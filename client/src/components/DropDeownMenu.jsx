import { useState } from 'react';
import { NavLink, useLocation, } from 'react-router-dom';

const DropdownMenu = () => {
    const [isStudentOpen, setIsStudentOpen] = useState(false);
    const [isDriverOpen, setIsDriverOpen] = useState(false);
    const location = useLocation();

    const downArrowPath = "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z";
    const upArrowPath = "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z";


    const isMenuOpen = (menu) => {
        return menu === 'student' ? isStudentOpen : isDriverOpen;
    };


    const toggleMenu = (menu) => {
        if (menu === 'student') {
            setIsStudentOpen(!isStudentOpen);
        } else {
            setIsDriverOpen(!isDriverOpen);
        }
    };


    const isActiveRoute = (route) => {
        return location.pathname === route;
    };

    return (
        <div className="relative inline-block text-center">
            <div className='flex space-x-2 items-center'>
                <div>
                    <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none "
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={() => toggleMenu('student')}
                    >

                        {isActiveRoute('/addstudents') ? 'Add Students' : ''}
                        {isActiveRoute('/studentslist') ? 'Students List' : ''}
                        {isActiveRoute('/studentsrent') ? 'Students Rent' : ''}
                        {!isActiveRoute('/addstudents') && !isActiveRoute('/studentslist') && !isActiveRoute('/studentsrent') ? 'Students' : ""}

                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d={isStudentOpen ? upArrowPath : downArrowPath} clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                <div>
                    <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none "
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={() => toggleMenu('driver')}
                    >
                        {isActiveRoute('/add_drivers') ? 'Add Drivers' : ''}
                        {isActiveRoute('/driverslist') ? 'Drivers List' : ''}
                        {isActiveRoute('/driverssalary') ? 'Drivers Salary' : ''}
                        {!isActiveRoute('/add_drivers') && !isActiveRoute('/driverslist') && !isActiveRoute('/driverssalary') ? 'Drivers' : ""}
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d={isDriverOpen ? upArrowPath : downArrowPath} clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen('student') && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <div className="py-1" role="none">
                        <NavLink
                            to={'/addstudents'}
                            className={`text-gray-700 block px-4 py-2 text-sm ${isActiveRoute('/addstudents') ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                        >
                            Add Students
                        </NavLink>
                        <NavLink
                            to={'/studentslist'}
                            className={`text-gray-700 block px-4 py-2 text-sm ${isActiveRoute('/studentslist') ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-1"
                        >
                            Students List
                        </NavLink>
                        <NavLink
                            to={'/studentsrent'}
                            className={`text-gray-700 block px-4 py-2 text-sm ${isActiveRoute('/studentsrent') ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                        >
                            Students Rent
                        </NavLink>
                    </div>
                </div>
            )}

            {isMenuOpen('driver') && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <div className="py-1" role="none">
                        <NavLink
                            to={'/add_drivers'}
                            className={`text-gray-700 block px-4 py-2 text-sm ${isActiveRoute('/adddrivers') ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                        >
                            Add Drivers
                        </NavLink>
                        <NavLink
                            to={'/driverslist'}
                            className={`text-gray-700 block px-4 py-2 text-sm ${isActiveRoute('/driverslist') ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-1"
                        >
                            Drivers List
                        </NavLink>
                        <NavLink
                            to={'/driverssalary'}
                            className={`text-gray-700 block px-4 py-2 text-sm ${isActiveRoute('/driverssalary') ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                        >
                            Drivers Salary
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
