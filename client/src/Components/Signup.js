// Create react component signup page
import Navi from './Navi';
import { useState, useCallback, useContext } from 'react'
import {auth, createUserWithEmailAndPassword} from './firebase.js'
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const navigate = useNavigate();
    const handleSignUp = useCallback(
        async (event) => {
        event.preventDefault();
        const signup_email = event.target.elements[2].value;
        const signup_password = event.target.elements[3].value;
        try {
            await createUserWithEmailAndPassword(auth, signup_email, signup_password);
            navigate("/")
        } catch (err) {
            alert(err);
        }
    },[navigate]
    );
    return (
        <div>
            <Navi />
            <div className="flex flex-col justify-center items-center mt-12">
                <h1 className='text-5xl font-bold mb-6'>Create an account</h1>
                <form onSubmit={handleSignUp}>
                    {/* Add fields for first name, last name, email, password, and confirm password */}
                    <div className="form-group">
                    <input type="firstname" className='border border-blue-400 rounded-lg w-full max-w-[400px] pl-2 h-12 mb-8 | lg:w-[250px]' placeholder="First Name" />
                    </div>
                    <div className="form-group">
                    <input type="lastname" className='border border-blue-400 rounded-lg w-full max-w-[400px] pl-2 h-12 mb-8 | lg:w-[250px]' placeholder="Last Name" />
                    </div>
                    <div className="form-group" htmlFor="signup_email">
                    <input type="email" className='border border-blue-400 rounded-lg w-full max-w-[400px] pl-2 h-12 mb-8 | lg:w-[250px]' placeholder="Email" />
                    </div>
                    <div className="form-group" htmlFor="signup_password">
                        <input type="password" className='border border-blue-400 rounded-lg w-full max-w-[400px] h-12 pl-2 mb-8 | lg:w-[250px]' placeholder="Password" />
                    </div>
                    <button className='rounded-lg w-full max-w-[400px] h-12 bg-blue-700 text-slate-50 mb-8 | lg:w-[250px]'>Submit</button>
                </form>
            </div>
            </div>
    );
};
export default Signup;



