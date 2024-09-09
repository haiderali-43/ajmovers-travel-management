import { useEffect, useState, } from "react";
import PrivateNavbar from "../../components/PrivateNavbar"
import axios from "axios";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import UpdateCompDriver from "../../components/UpdateCompDriver";



const DriversPage = () => {
  const [drivers, setDrivers] = useState([])
  const [updateDriver, setUpdateDriver] = useState(false)


  // function to open update component
  const handleUpdateDriverinfo = () => {
    setUpdateDriver(prevstate => !prevstate)
  }




  useEffect(() => {
    axios.get('/api/drivers/getdrivers')
      .then(res => setDrivers(res.data))
      .catch(err => console.error(err))
  }, [])

  const handledeleteDriver = async (e, driverId) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:5000/api/drivers/deletedriver/${driverId}`)
      console.log(response)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div>
      <PrivateNavbar btnone="Signout" />
      <table className="min-w-full leading-normal shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Sr.no
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Name
            </th>

            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Phone
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Vehicle
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">

            </th>

          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <tr key={driver.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {drivers.indexOf(driver) + 1}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {driver.name}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {driver.phone}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {driver.vehicle}
              </td>
              <td className='px-5 py-5 border-b border-gray-200  bg-white text-sm'>
                {updateDriver && <UpdateCompDriver driverId={driver.id} />}
                <div className="flex space-x-2">
                  <AiOutlineEdit className='text-blue-500 font-semibold text-2xl cursor-pointer' onClick={handleUpdateDriverinfo} />
                  <form onSubmit={(e) => handledeleteDriver(e, driver.id)}>
                    <button type="submit">
                      <AiOutlineDelete className='text-red-500 font-semibold text-2xl cursor-pointer ' />
                    </button>
                  </form>
                </div>


              </td>

            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default DriversPage
