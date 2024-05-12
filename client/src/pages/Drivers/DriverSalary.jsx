
import { toast } from "react-hot-toast";
import PrivateNavbar from "../../components/PrivateNavbar"
import axios from "axios";
import { useEffect, useState } from "react";



const DriverSalary = () => {
  const [drivers, setDrivers] = useState([])
  const [driverSalaryStatus, setDriverSalaryStatus] = useState({})
  const [isbuttondisabled, setisbuttondisabled] = useState(false);

  useEffect(() => {
    localStorage.setItem('isbuttondisabled', isbuttondisabled);
  }, [isbuttondisabled])



  const handleDriverSalary = async (e, driverId) => {
    e.preventDefault();
    try {

      // Toggle salary status
      const newSalaryStatus = !driverSalaryStatus[driverId];
      setDriverSalaryStatus(prevStatus => ({
        ...prevStatus,
        [driverId]: newSalaryStatus
      }))
      const salarystatus = { salary: newSalaryStatus, name: drivers.find(driver => driver.id === driverId).name }
      const response = await axios.put(`http://localhost:5000/api/drivers/updatesalarystatus/${driverId}`, salarystatus)
      toast.success(`Salary status updated successfully of ${driverSalaryStatus.name}`
      )
      console.log(response)
      setisbuttondisabled((prevStatus) => ({
        ...prevStatus,
        [driverId]: !prevStatus[driverId]
      }))
    } catch (error) {
      console.error(error.message)
      setisbuttondisabled(false)
      setDriverSalaryStatus(prevStatus => ({
        ...prevStatus,
        [driverId]: !prevStatus[driverId]
      }))
    }
  }

  useEffect(() => {
    axios.get('http://localhost:5000/api/drivers/getdrivers')
      .then(response => {
        // Update drivers state
        setDrivers(response.data);

        // Initialize driverSalaryStatus
        const initialSalaryStatus = {};
        for (const driver of response.data) {

          initialSalaryStatus[driver.id] = driver.salary;
        }


        setDriverSalaryStatus(initialSalaryStatus);
      })
      .catch(error => console.log(error));
  }, []);


  return (
    <div>
      <PrivateNavbar btnone={'Signout'} />
      <table className="min-w-full leading-normal shadow-md rounded-lg overflow-hidden">
        <thead >
          <tr className="bg-blue-500 text-white rounded-lg">
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wide">
              Sr no
            </th>

            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Salary
            </th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {drivers.indexOf(driver) + 1}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {driver.name}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <form onSubmit={(e) => handleDriverSalary(e, driver.id)} className="flex space-x-2">
                  <button
                    type="submit"
                    className={`p-3 rounded-lg text-white font-bold ${driverSalaryStatus[driver.id] ? "bg-green-500" : "bg-red-500"
                      }`} disabled={driverSalaryStatus[driver.id] ? true : false}
                  >
                    {driverSalaryStatus[driver.id] ? "Paid" : "Unpaid"}
                  </button>

                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default DriverSalary
