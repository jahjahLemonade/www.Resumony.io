// This page will allow the customer to pick between two different payment plans
// Option #1: Monthly for 9 dollars
// Option #2: Front end as a serive where they pay one time payment for 29 dollars
// They can use the website as a front end for their own openAI apikey

import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Auth'
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import Navi from './Navi';
import axios from 'axios';

const PaymentPlans = () => {
    // On page load of the page, the user will be presented with two options
    // Need to check subscription collection in firebase to see if subscription id exist for user using email
    // If subscription exist, then I'll grab data from stripe API about subscription and display it.

    // Disable button if subscription exist
    // If subscription exist, then I'll grab data from stripe API about subscription and display it.

    const [disableMonthly, setDisableMonthly] = useState(false);
    const [subId, setSubId] = useState('');
    const [status, setStatus] = useState('')
    const [renewal, setRenewalDate] = useState('')

    const { currUser } = useContext(AuthContext);

    const handleDate = (timestamp) => {
        // Convert UNIX timestamp (seconds) to MM/DD/YYYY format
        const date = new Date(timestamp * 1000); // Convert to milliseconds
        const formattedDate = (date.getMonth() + 1).toString().padStart(2, '0') + '/' +
                            date.getDate().toString().padStart(2, '0') + '/' +
                            date.getFullYear();
        return formattedDate;

    }

    useEffect(() => {
        // check for sub_id from firestore
        const docRef = doc(db, "subscriptionIDs", currUser.email);
        const getSubId = async () => {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setDisableMonthly(true);
                setSubId(docSnap.data()[currUser.email]);
                console.log(subId, docSnap.data()[currUser.email])
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        // Get subscription status and when it renews
        const getSubscriptionStatus = async () => {
            const res = await axios.post('http://localhost:3001/subscription-status', { subId });
            setStatus(res.data.status)
            setRenewalDate(res.data.renewal_date)
        }
        getSubId();
        getSubscriptionStatus();
    }, []);

    return (
        <div>
            <Navi />
            <h1 className="text-xl font-bold mb-12 text-center mt-16 | md:text-2xl | lg:text-4xl | xl:text-4xl">
                Great Resumes Start With a Plan
            </h1>
            <div className="flex flex-col px-4 justify-center | md:items-center | lg:flex-row lg:justify-around">
                <div className="flex flex-col border-2 w-full max-w-[400px] h-full justify-center py-8 |">
                    <div className="w-full text-xl text-center mb-12 | md:text-2xl | lg:text-4xl">
                        Monthly
                    </div>
                    <div className="w-full text-xl text-center mb-12 | md:text-2xl | lg:text-4xl">
                        $9 <span className="text-lg">USD</span>
                    </div>
                    <div className="w-full max-w-[300px] mx-auto  text-md font-light text-center mb-12 | lg:text-lg">
                        Monthly subscription to Resumony's platform that offer resume tailoring and storage services. 
                    </div>
                    <Link to="/monthly" onClick={(e) => disableMonthly ? e.preventDefault() : '' } className={`flex justify-center items-center my-4 mx-auto rounded-lg text-xl w-full max-w-[280px] h-16 bg-blue-700 text-slate-50 | lg:w-[250px] ${disableMonthly ? 'cursor-not-allowed opacity-50' : ''}`}>Get started</Link>
                    <div className='flex flex-col items-center justify-center'>
                        { !disableMonthly ? 
                            (<div></div>) 
                            : 
                            (<><p>***Status: {status}</p><p>{status === 'active' ? `Renewal Date: ${handleDate(renewal)}` : `End Date: ${handleDate(renewal)}`}</p></>)
                        }
                    </div>
                </div>
                <div className="flex flex-col border-2 w-full max-w-[400px] h-full justify-center my-12 py-8">
                    <div className="w-full text-xl text-center mb-12 | md:text-2xl | lg:text-4xl | xl:text-4xl">
                        One Time Payment
                    </div>
                    <div className="w-full text-xl text-center mb-12 | md:text-2xl | lg:text-4xl">
                        $29 <span className="text-lg">USD</span>
                    </div>
                    <div className="w-full max-w-[300px] mx-auto text-md font-light text-center mb-12 | lg:text-lg">
                    Resumony's front-end that allow user's to use their own apikey
                    </div>
                    <Link to="/alert" className='flex justify-center items-center mt-8 mx-auto rounded-lg text-xl w-full max-w-[280px] h-16 bg-blue-700 text-slate-50 mb-8 | lg:w-[250px]'>Get started</Link>
                </div>
            </div> 
        </div>
    )
}

export default PaymentPlans