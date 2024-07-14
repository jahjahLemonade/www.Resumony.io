// This page will allow the customer to pick between two different payment plans
// Option #1: Monthly for 9 dollars
// Option #2: Front end as a serive where they pay one time payment for 29 dollars
// They can use the website as a front end for their own openAI apikey

import Navi from "./Navi"
import { Link } from 'react-router-dom';

const PaymentPlans = () => {

    return (
        <div>
            <Navi />
            <h1 className="text-xl font-bold mb-12 text-center mt-16 | md:text-2xl | lg:text-4xl | xl:text-4xl">
                Great Resumes Start With a Plan
            </h1>
            <div className="flex px-4 justify-center | md:flex-col md:items-center | lg:flex-row lg:justify-around">
                <div className="flex flex-col border-2 w-full max-w-[400px] h-full justify-center py-8 |">
                    <div className="w-full text-xl text-center mb-12 | md:text-2xl | lg:text-4xl">
                        Monthly
                    </div>
                    <div className="w-full text-xl text-center mb-12 | md:text-2xl | lg:text-4xl">
                        $9 <span className="text-lg">USD</span>
                    </div>
                    <div className="w-full text-md font-light text-center mb-12 | lg:text-lg">
                        Description
                    </div>
                    <Link to="/payment" className='flex justify-center items-center mt-8 mx-auto rounded-lg text-xl w-full max-w-[280px] h-16 bg-blue-700 text-slate-50 mb-8 | lg:w-[250px]'>Get started</Link>
                </div>
                <div className="flex flex-col border-2 w-full max-w-[400px] h-full justify-center my-12 py-8">
                    <div className="w-full text-xl text-center mb-12 | md:text-2xl | lg:text-4xl | xl:text-4xl">
                        One Time Payment
                    </div>
                    <div className="w-full text-xl text-center mb-12 | md:text-2xl | lg:text-4xl">
                        $29 <span className="text-lg">USD</span>
                    </div>
                    <div className="w-full text-md font-light text-center mb-12 | lg:text-lg">
                        Description
                    </div>
                    <Link to="/payment" className='flex justify-center items-center mt-8 mx-auto rounded-lg text-xl w-full max-w-[280px] h-16 bg-blue-700 text-slate-50 mb-8 | lg:w-[250px]'>Get started</Link>
                </div>
            </div> 
        </div>
    )
}

export default PaymentPlans