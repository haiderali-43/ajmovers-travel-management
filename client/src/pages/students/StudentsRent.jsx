import axios from "axios";
import PrivateNavbar from "../../components/PrivateNavbar";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";


const StudentsRent = () => {
  const [students, setStudents] = useState([]);
  const [rentStatus, setRentStatus] = useState({});
  const [isbuttondisabled, setisbuttondisabled] = useState(false);

  useEffect(() => {
    localStorage.setItem('isbuttondisabled', isbuttondisabled);
  }, [isbuttondisabled])



  useEffect(() => {
    axios.get('http://localhost:5000/api/students/getstudents')
      .then(res => {
        setStudents(res.data.data);


        const initialRentStatus = {};
        for (const student of res.data.data) {
          initialRentStatus[student.id] = student.rent;
        }
        setRentStatus(initialRentStatus);
      })
      .catch(err => console.error(err));
  }, []);

  const handleRentStatus = async (e, studentId) => {
    e.preventDefault();
    try {
      // Toggle rent status
      const newRentStatus = !rentStatus[studentId];

      // Update rent status locally
      setRentStatus(prevStatus => ({
        ...prevStatus,
        [studentId]: newRentStatus
      }));
      setisbuttondisabled(prevState => ({
        ...prevState,
        [studentId]: newRentStatus
      }));

      const rentstatus = {
        rent: newRentStatus,
        name: students.find(student => student.id === studentId).name
      };
      const response = await axios.put(`http://localhost:5000/api/students/updaterentstatus/${studentId}`, rentstatus);
      toast.success(`${rentstatus.name} rent has been paid`
      );
      console.log("rent status updated")
      console.log(response);
    } catch (error) {
      // Revert rent status if API call fails
      setRentStatus(prevStatus => ({
        ...prevStatus,
        [studentId]: !prevStatus[studentId]
      }));
      toast.error("Failed to update rent status"
      );
      console.error(error.message);
    }
  };

  return (
    <div>
      <PrivateNavbar btnone={'Signout'} />
      <table className="min-w-full leading-normal shadow-md rounded-lg overflow-hidden text-center ">
        <thead className="">
          <tr className="bg-blue-500 text-white">
            <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-semibold uppercase tracking-wider">
              Sr. No
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-semibold uppercase tracking-wider">
              Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Rent
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {index + 1}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {student.name}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <form onSubmit={(e) => handleRentStatus(e, student.id)} className="py-2 px-4 rounded-full flex space-x-2">
                  <button
                    type="submit"
                    className={`p-3 rounded-lg text-white font-bold ${rentStatus[student.id] ? "bg-green-500" : "bg-red-500"
                      }`} disabled={rentStatus[student.id] ? true : false}
                  >
                    {rentStatus[student.id] ? "Rent Paid" : "Rent Unpaid"}
                  </button>

                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
   
    </div>
  );
};

export default StudentsRent;
