import { useState, useEffect } from 'react';
import PrivateNavbar from '../components/PrivateNavbar';


const Dashboard = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            <PrivateNavbar btnone="Signout" />
            <div className="container max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-lg rounded-lg p-10 text-center">
                    <h2 className="text-3xl font-semibold text-gray-700">Time</h2>
                    <p className="text-2xl text-gray-600 mt-2">{date.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
