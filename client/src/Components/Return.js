import React, { useEffect, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Navi from './Navi';
import { AuthContext } from './Auth.js';
import { db } from './firebase';
import { setDoc, doc } from 'firebase/firestore';
import check from '../assets/check.svg';

const Return = () => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');
    const [subId, setSubId] = useState('');

    const {currUser} = useContext(AuthContext);

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const sessionId = urlParams.get('session_id');

        //axios call to get the session status
        axios.get(`http://localhost:3001/session-status?session_id=${sessionId}`)
            .then((res) => {
                setStatus(res.data.status);
                setCustomerEmail(res.data.customer_email);
                setSubId(res.data.subID);
            });
    }, []);

    if (status === 'open') {
        return (
            <Navigate to="/payment" />
        )
    }

    if (status === 'complete') {
        // Add email and sub Id to subscriptionIDs collection in firestore
        const addSubscription = async () => {
            const subscription = {
                [currUser.email]: subId
            }
            await setDoc(doc(db, 'subscriptionIDs', currUser.email), subscription);
        }
        addSubscription();

        return (
            <div>
                <Navi />
                <div className="flex flex-col items-center justify-center">
                    <img src={check} alt='check' className='my-16 w-44 | md:w-60' />
                    <section className="flex flex-col justifiy-center" id="success">
                        <p className="px-2 text-xl text-slate-600 text-center font-light w-full max-w-[600px]">
                            We appreciate you and your business! A confirmation email will be sent to {customerEmail}.

                            If you have any questions, please email <a className='font-bold' href="mailto:support@resumony.io">support@resumony.io</a>.
                        </p>
                    </section>
                </div>
            </div>
        )
    }
    return null;
}

export default Return;

