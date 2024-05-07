// Page used for collecting user feedback
// I need to create a form that collects user feedback
// I need a text saying share feedback
// I can grab user name and email 
// From what they used to sign up for the website in firebase

import Navi from "./Navi"
import axios from 'axios'
import { useContext } from "react";
import { AuthContext } from "./Auth.js";

const Feedback = () => {
    const { currUser } = useContext(AuthContext);

    const handleEmail = async (event) => {
        event.preventDefault();
        //array of form elements
        const feedback = event.target.elements[0].value;
        axios.post('http://localhost:3001/sendEmail', {
            feedback: feedback,
            // Get from firebase
            email: currUser.email
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log("FE >>> ",error);
        });
        event.target.elements[0].value = '';
    }
    return (
        <div>
            <Navi />
            <div className="flex flex-col items-center justify-center mt-16">
                <h1 className='text-center text-xl font-bold mb-8 | md:text-2xl | lg:text-4xl | xl:text-4xl'>Feel free to drop us with your feedback!</h1>
                <p className="px-2 text-md text-slate-600 text-center font-light w-full max-w-[500px]">We are always looking to grow our services. We want to hear from the people we aim to please with our product. Feel free to provide us with any feedback, so we can improve, as well as any features you would like to see. Thank you for your time. We appreciate you.</p>
            </div>
            <div className="flex flex-col px-4">
                <form onSubmit={handleEmail} className="flex flex-col items-center">
                        <div className="w-full max-w-[476px]">
                            <div className="relative w-full min-w-[200px] my-12">
                                <textarea
                                    className="peer h-[230px] min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-700 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" ">
                                </textarea>
                                <label
                                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-blue-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Share your feedback here
                                </label>
                            </div>
                    </div>
                    <button type="submit" className='mx-auto rounded-lg text-xl w-full max-w-[280px] h-16 bg-blue-700 text-slate-50 mb-8 | lg:w-[250px]'>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Feedback