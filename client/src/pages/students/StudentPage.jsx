import { useEffect, useState } from 'react';
import PrivateNavbar from "../../components/PrivateNavbar";
import axios from 'axios';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import UpdateCompStudent from '../../components/UpdateCompStudent';
import toast from 'react-hot-toast';




const StudentPage = () => {
  const [students, setStudents] = useState([])
  const [updateStudentData, setUpdateStudentData] = useState()






  //get all students
  useEffect(() => {
    axios.get('api/students/getstudents')
      .then(res => setStudents(res.data.data))
      .catch(err => console.log(err))
  })






  const handleStudentdelete = async (e, studentId) => {
    e.preventDefault()
    try {
      const deletestudent = await axios.delete(`/api/students/deletestudent/${studentId}`)
      toast.success("Student deleted successfully")
      console.log(deletestudent)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleUpdateStudentInfo = () => {
    setUpdateStudentData(!updateStudentData)
  }







  return (
    <div>
      <PrivateNavbar btnone="Signout" />
      <table className="min-w-full leading-normal shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Sr. No
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Cantt/GT Road
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Phone
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Stop
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Program
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">

            </th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>


              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {students.indexOf(student) + 1}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {student.name}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {student.cantt}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {student.phone}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {student.stop}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {student.program}
              </td>
              <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {updateStudentData && <UpdateCompStudent studentId={student.id} />}
                <div className='flex space-x-2'>
                  <AiOutlineEdit className='text-blue-500 font-semibold text-2xl cursor-pointer' onClick={handleUpdateStudentInfo} />
                  <form onSubmit={(e) => handleStudentdelete(e, student.id)}>
                    <button type='submit'>
                      <AiOutlineDelete className='text-red-500 font-semibold text-2xl cursor-pointer' />

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
export default StudentPage;
