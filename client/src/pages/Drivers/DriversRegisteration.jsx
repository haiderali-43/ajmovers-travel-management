import { useState } from "react"
import PrivateNavbar from "../../components/PrivateNavbar"

import { toast } from "react-hot-toast"

import { useNavigate } from "react-router-dom"
import axios from "axios"


const DriversRegisteration = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [vehicle, setVehicle] = useState('')
  const navigate = useNavigate()

  const handleDriver = async (e) => {
    e.preventDefault();
    try {
      const driver = { name, phone, vehicle };
      const response = await axios.post('http://localhost:5000/api/drivers/createdriver', driver);

      toast.success("Driver registered successfully"
      );
      navigate('/driverslist');
      console.log(response);
    } catch (error) {
      toast.error('Error Adding Driver'
      );
      console.error(error.message);
    }
  };

  return (
    <div>
      <PrivateNavbar btnone="Signout" />
      <div className="flex flex-col items-center justify-center mt-2">
        <h1 className="text-3xl font-bold mb-4">Add Drivers</h1>
        <form className="w-1/2" onSubmit={handleDriver}>
          <div className="mb-4"></div>
          <div>
            <label htmlFor="Name" className="block mb-2">Name</label>
            <input type="text" placeholder="Enter the student Name" className="w-full px-4 py-2 border border-gray-300 rounded" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="Phone" className="block mb-2">Phone</label>
            <input type="tel" placeholder="Enter the Driver Phone" className="w-full px-4 py-2 border border-gray-300 rounded" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="Address" className="block mb-2">Vehicle</label>
            <input type="text" placeholder="Enter the Vehicle Detail" className="w-full px-4 py-2 border border-gray-300 rounded" value={vehicle} onChange={(e) => setVehicle(e.target.value)} />
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Driver</button>

        </form>
    
      </div >

    </div>
  )
}

export default DriversRegisteration
