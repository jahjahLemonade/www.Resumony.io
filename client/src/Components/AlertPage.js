// A page that lead users who click one time payment. We want to as notify the 
// user who want to be alerted when this feature become available. We are grabbing the user emnil 
// and storing it in a collection found in the firestore.

import { useContext, useEffect, useState } from "react"
import Navi from "./Navi"
import { AuthContext } from './Auth'
import { db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AlertPage = () => {

    const [disabledButton, setDisabledButton] = useState(false)

    const handleClick = () => {
         // Add user email to alertUsers collection in firestore
         const addUserEmail = async () => {
            const alert = {
                [currUser.email]: true
            }
            await setDoc(doc(db, 'alertUsers', currUser.email), alert);
        }
        addUserEmail();
        setDisabledButton(true)
    }

    const { currUser } = useContext(AuthContext);

    useEffect(() => {
        // check if user signed up to be alerted
        const docRef = doc(db, "alertUsers", currUser.email);
        const getAlertStatus = async () => {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setDisabledButton(true)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        getAlertStatus();
    }, []);

    return (
        <div>
            <Navi/>
            <div className="mx-auto w-full max-w-[750px] font-bold mt-24 mb-16 px-4 | md:text-xl">
                "Coming soon! We will allow users to use their own personal OpenAI API key to make requests in our resume AI platform. 
                This will give users more control and save them money by paying a one-time fee. 
                Resumony will act as a front-end-as-a-service from then on. If you would like to be 
                alerted about this new feature, please let us know. Thank you for your time."
            </div>
            <div className="flex justify-center">
                <button onClick={handleClick} disabled={disabledButton} className={`flex justify-center items-center my-4 mx-auto rounded-lg text-xl w-full max-w-[280px] h-16 bg-blue-700 text-slate-50 | lg:w-[250px] ${disabledButton ? 'cursor-not-allowed opacity-50' : ''}`}>Sign me up!!!</button>
            </div>
        </div>
    )
}

export default AlertPage