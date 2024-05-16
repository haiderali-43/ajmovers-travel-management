import { useState } from "react"
import PrivateNavbar from "../../components/PrivateNavbar"


import { useNavigate } from "react-router-dom"
import { toast } from 'react-hot-toast'
import axios from "axios"


const StudentRegisteration = () => {
  const [name, setName] = useState("")
  const [cantt, setCantt] = useState("GT Road")
  const [phone, setPhone] = useState("")
  const [stop, setStop] = useState("")
  const [program, setProgram] = useState("")
  const navigate = useNavigate()

  const handleStudent = async (e) => {
    e.preventDefault();


    try {
      const student = { name, cantt, phone, stop, program };
      const response = await axios.post('api/students/createstudent', student)

      toast.success("Student added successfully");
      navigate("/studentslist")
      console.log(response.data)
    } catch (error) {
      toast.error("Failed to add student")
    }


  };


  return (
    <div>
      <PrivateNavbar btnone={'Signout'} />
      <div className="flex flex-col items-center justify-center mt-2">
        <h1 className="text-3xl font-bold mb-4">Add Students 🎓</h1>
        <form className="w-1/2" onSubmit={handleStudent}>
          <div className="mb-4"></div>
          <div>
            <label htmlFor="Name" className="block mb-2">Name</label>
            <input type="text" placeholder="Enter the student Name" className="w-full px-4 py-2 border border-gray-300 rounded" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4 mt-2">
            <div>
              <label htmlFor="Cantt" className="block mb-2">Cantt/GT Road</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded" value={cantt} onChange={(e) => setCantt(e.target.value)}>
                <option value="Wah Cantt">Wah Cantt</option>
                <option value="GT Road">GT Road</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="Phone" className="block mb-2">Phone</label>
            <input type="text" placeholder="Enter the student Phone" className="w-full px-4 py-2 border border-gray-300 rounded" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="Address" className="block mb-2">Stop</label>
            <input type="text" placeholder="Enter the student Stop" className="w-full px-4 py-2 border border-gray-300 rounded" value={stop} onChange={(e) => setStop(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="Address" className="block mb-2">Program</label>
            <input type="text" placeholder="Enter the student Program and Semester" className="w-full px-4 py-2 border border-gray-300 rounded" value={program} onChange={(e) => setProgram(e.target.value)} />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Student</button>
        </form>
      </div >
    </div >
  )
}

export default StudentRegisteration
