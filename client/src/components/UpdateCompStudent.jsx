
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

import PropTypes from 'prop-types'


// eslint-disable-next-line react/prop-types
const UpdateCompStudent = ({ studentId }) => {

    const [name, setName] = useState('')
    const [cantt, setCantt] = useState('')
    const [phone, setPhone] = useState('')
    const [stop, setStop] = useState('')
    const [program, setProgram] = useState('')





    //fetching user information by id
    useEffect(() => {


        const fetchstudentdatabyid = (studentId) => {
            axios.get(`http://localhost:5000/api/students/getstudent/${studentId}`)

                .then(res => {
                    console.log("Student data:", res.data);
                    setName(res.data.name)
                    setCantt(res.data.cantt)
                    setPhone(res.data.phone)
                    setStop(res.data.stop)
                    setProgram(res.data.program)

                })
                .catch(err => console.log(err))

        }
        if (studentId) {
            fetchstudentdatabyid(studentId)
        }
    }, [studentId])

    const handleUpdatestudentInformation = async (e, studentId) => {
        e.preventDefault()
        try {

            const response = await axios.put(`http://localhost:5000/api/students/updatestudent/${studentId}`, { name, cantt, phone, stop, program });
            toast.success(`Information Updated successfully`, {
                position: 'top-right',
                autoClose: '1000'
            })

            console.log(response);

        } catch (error) {
            console.error(error.message);
            toast.error('Error in updating information', {
                position: "top-right",
                autoClose: '1000'
            })

        }
    };

    return (

        <div className="w-[30rem] h-[40rem] bg-gray-800 p-8 rounded-lg shadow-lg  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-scroll">
            <h2 className="text-white text-lg font-semibold mb-4">User Information</h2>
            <form onSubmit={(e) => handleUpdatestudentInformation(e, studentId)}>
                <div className="mb-6">
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 focus:outline-none"
                        placeholder="Enter name"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                        Cantt
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={cantt}
                        onChange={(e) => setCantt(e.target.value)}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 focus:outline-none"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 focus:outline-none"
                        placeholder="Enter phone number"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="stop" className="block text-white text-sm font-medium mb-2">
                        Stop
                    </label>
                    <input
                        type="text"
                        id="stop"
                        name="stop"
                        value={stop}
                        onChange={(e) => setStop(e.target.value)}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 focus:outline-none"
                        placeholder="Enter stop"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="programSemester" className="block text-white text-sm font-medium mb-2">
                        Program
                    </label>
                    <input
                        type="text"
                        id="programSemester"
                        name="programSemester"
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 focus:outline-none"
                        placeholder="Enter program and semester"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update Information
                </button>
            </form>
            <ToastContainer />
        </div>

    )
}

UpdateCompStudent.prototype = {
    studentId: PropTypes.string,

}


export default UpdateCompStudent
