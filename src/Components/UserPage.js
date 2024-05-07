import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom"
import { db, collection } from "./firebase";
import { AuthContext } from "./Auth.js";
import { getDocs } from "firebase/firestore";

const UserPage = ({ name }) => {
    //handle click for create resume, it leads to /create page
    //handle click for resume 1, it leads to /resume1 page
    //handle click for resume 2, it leads to /resume2 page
    //When page is loaded, it should grab all resumes from firestore and display in the grid, each resume lead to the individual resume in the database.

    const [resumeList, setResumeList] = useState([]);
    const [pending, setPending] = useState(true)
    // const navigate = useNavigate();
    const { currUser } = useContext(AuthContext);

    useEffect(() => {

        //fetch all resumes from firestore
        const docRef = collection(db, "resumes")
        const getResume = async () => {
            const querySnapshot = await getDocs(docRef);
            querySnapshot.forEach((doc) => {
                setResumeList([{ ...doc.data(), id: doc.id }]);
                setPending(false)
            });
        }
        getResume();
        //delete removed
        // const unsubscribe = collection("reminders").onSnapshot((snapshot) => {
        //   const list = [];
        //   snapshot.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
        //   setReminderList(list);
        // });
        // return unsubscribe;
    }, []);

    return (
        <div>
            <div className="flex justify-center mt-16">
                <h1 className='text-xl font-bold mb-12 | md:text-2xl | lg:text-4xl | xl:text-4xl'>Welcome {currUser.email} to your user page</h1>
            </div>
            <div className="flex flex-col px-4 items-center | md:grid md:grid-cols-3 md:place-items-center | lg:grid-cols-4 | xl:grid-cols-5 | 2xl:grid-cols-6">
                <Link to='/create' className="text-blue-700 border-blue-700 border-2 text-center rounded-lg w-full max-w-[150px] h-44 flex justify-center items-center mb-6">Create New Resume</Link>
                {pending ? (
                    <div className="flex w-full max-w-[150px] h-44 justify-center items-center mb-6"><div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-blue-600" /></div>
                ) : (resumeList.map((resume) => (
                    <div key={resume.id} className="bg-blue-700 text-slate-50 rounded-lg w-full max-w-[150px] h-44 'flex flex-col mb-6">
                        <p>Company</p>
                        <p>Position</p>
                        <p>Location</p>
                        <p>Date</p>
                    </div>
                )))}
            </div>
        </div>
    );
}
export default UserPage