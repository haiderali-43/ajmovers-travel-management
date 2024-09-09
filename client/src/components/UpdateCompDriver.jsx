import axios from "axios"
import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { toast, ToastContainer } from 'react-toastify'




// eslint-disable-next-line react/prop-types
const UpdateCompDriver = ({ driverId, }) => {
    

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [vehicle, setVehicle] = useState("")



    useEffect(() => {
        const fetchdriverbyid = (driverId) => {
            axios.get(`https://ajmovers-backend.vercel.app/api/drivers/getdriverbyid/${driverId}`)
                .then(res => {

                    setName(res.data.name)
                    setPhone(res.data.phone)
                    setVehicle(res.data.vehicle)
                })
                .catch(err => console.log(err))
        }
        if (driverId) {
            fetchdriverbyid(driverId)
        }
    }, [driverId])


    const handleUpdatedriverInformation = async (e, driverId) => {
        e.preventDefault()
        try {
            const response = await axios.put(`https://ajmovers-backend.vercel.app/api/drivers/updatedriver/${driverId}`, { name, phone, vehicle })
            
            toast.success("Student information updated successfully", {
                position: "top-right",
                autoClose: 1000,

            })
            console.log(response)
        } catch (error) {
            console.log(error.message)
            toast.error("Error updating student information", {
                position: "top-right",
                autoClose: 1000,
            })
        }
    }



    return (
        <div className="w-[30rem] h-[30rem] bg-gray-800 p-8 rounded-lg shadow-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h2 className="text-white text-lg font-semibold mb-4">User Information</h2>
            <form onSubmit={(e) => handleUpdatedriverInformation(e, driverId)}
            >
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
                    <label htmlFor="programSemester" className="block text-white text-sm font-medium mb-2">
                        Vehicle
                    </label>
                    <input
                        type="text"
                        id="programSemester"
                        name="programSemester"
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}

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

UpdateCompDriver.prototype = {
    driverId: PropTypes.string,

}


export default UpdateCompDriver
