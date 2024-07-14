import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import { db, collection } from "./firebase";
import { AuthContext } from "./Auth.js";
import { getDocs } from "firebase/firestore";
import Modal from "./ViewResume.js";

const UserPage = ({ name }) => {
    //When page is loaded, it should grab all resumes from firestore and display in the grid, each resume lead to the individual resume in the database.

    const [resumeList, setResumeList] = useState([]);
    const [pending, setPending] = useState(true)
    const { currUser } = useContext(AuthContext);

    useEffect(() => {

        //fetch all resumes from firestore
        console.log('refresh')
        const docRef = collection(db, "resumes")
        const getResume = async () => {
            const querySnapshot = await getDocs(docRef);
            querySnapshot.forEach((doc) => {
                for (let i = 0; i < Object.keys(doc.data()).length; i++) {
                    setResumeList([doc.data()]);
                    setPending(false)
                }
            })
        }
        getResume();
    }, []);

    return (
        <div>
            <div className="flex flex-col justify-center mt-16">
                <h1 className='text-xl font-bold mb-12 text-center | md:text-2xl | lg:text-4xl | xl:text-4xl'>Welcome {currUser.email} to your user page</h1>
            </div>
            <div className="flex flex-col px-4 items-center | md:grid md:grid-cols-3 md:place-items-center | lg:grid-cols-4 | xl:grid-cols-5 | 2xl:grid-cols-6">
                <Link to='/paymentplans' className="text-blue-700 border-blue-700 border-2 text-center rounded-lg w-full max-w-[150px] h-44 flex justify-center items-center mb-6">Payment</Link>
                <Link to='/create' className="text-blue-700 border-blue-700 border-2 text-center rounded-lg w-full max-w-[150px] h-44 flex justify-center items-center mb-6">Create New Resume</Link>
                {/* i need a pending wheel for each element in the array */}
                {pending ? <div className="flex w-full max-w-[150px] h-44 justify-center items-center mb-6"><div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-blue-600" /></div>
                    : resumeList.map((resume, index) => {
                    return <Modal key={index} resume_key={index} resume={resume} />
                })}
            </div>
        </div>
    );
}

export default UserPage