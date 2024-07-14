// This is the page where we create a new resume and add it to firebase under "resume" document
//
// The CreateResume component is a form that allows users to input their career summary, work experience, company name, role, responsibilities, and qualifications. The form is submitted to the server using axios. The component also includes a navigation bar (Navi) at the top of the page.
//
// The handleResume function is an asynchronous function that prevents the default form submission behavior and posts the resume data to the server.
//

// import { useEffect, useState } from 'react';
import Navi from './Navi';
import { useNavigate } from 'react-router-dom';

const CreateResume = () => {
    const navigate = useNavigate();
    const handleResume = async (event) => {
        event.preventDefault();
        const summary = event.target.summary.value;
        const experience = event.target.experience.value;
        const company = event.target.company.value;
        const role = event.target.role.value;
        const resp = event.target.resp.value;
        const qual = event.target.qual.value;

        const resume = {
            summary: summary,
            experience: experience,
            company: company,
            role: role,
            resp: resp,
            qual: qual
        }
        navigate("/creatingResume", { state: { resume } })
    }

    return (
        <div>
            <Navi />
            <div className="flex flex-col items-center px-4">
                <h1 className='text-2xl md:text-3xl font-bold mt-16 mb-12'>Tailor Your Resume</h1>
                <form onSubmit={handleResume} className="flex flex-col w-full max-w-[1000px]">
                    <div className='flex flex-col lg:flex-row lg:justify-between'>
                        <div className='grow'>
                            <div className='flex justify-center'><h1 className='text-xl md:text-2xl font-light my-6 underline'>Who you are</h1></div>
                            <div className="flex flex-row justify-center">
                                <div className="flex flex-col w-full max-w-[400px]">
                                    <div className='w-full mb-2'><label htmlFor="summary">Career Summary:</label></div>
                                    <div className='w-full'><textarea className='border border-blue-400 rounded-lg w-full pl-2 h-52 mb-8' placeholder="" type="text" id="summary" name="summary" required></textarea></div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="flex flex-col w-full max-w-[400px]">
                                    <div className='mb-2'><label htmlFor="experience">Work Experience:</label></div>
                                    <div className='flex '><textarea className='border border-blue-400 rounded-lg w-full max-w-[400px] pl-2 h-52 mb-8' placeholder="" type="text" id="experience" name="experience" required></textarea></div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="flex flex-col w-full max-w-[400px]">
                                    <div className='mb-2'><label htmlFor="experience">Skills:</label></div>
                                    <div className='flex '><textarea className='border border-blue-400 rounded-lg w-full max-w-[400px] pl-2 h-24 mb-8' placeholder="" type="text" id="experience" name="experience" required></textarea></div>
                                </div>
                            </div>
                        </div>
                        <div className='grow'>
                            <div className='flex justify-center'><h1 className='text-xl md:text-2xl font-light my-6 underline'>What the job involve</h1></div>
                            <div className="flex flex-row justify-center">
                                <div className="flex flex-col w-full max-w-[400px]">
                                    <div className='mb-2'><label htmlFor="company">Company Name:</label></div>
                                    <div className='flex justify-center'><input className='border border-blue-400 rounded-lg w-full max-w-[400px] pl-2 h-12 mb-8' placeholder="" type="text" id="company" name="company" required></input></div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="flex flex-col w-full max-w-[400px]">
                                    <div className='mb-2'><label htmlFor="position">Role:</label></div>
                                    <div className='flex justify-center'><input className='border border-blue-400 rounded-lg w-full max-w-[400px] pl-2 h-12 mb-8' placeholder="" type="text" id="role" name="role" required></input></div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="flex flex-col w-full max-w-[400px]">
                                    <div className='mb-2'><label htmlFor="position">Responsibities:</label></div>
                                    <div className='flex justify-center'><textarea className='border border-blue-400 rounded-lg w-full max-w-[400px] pl-2 h-52 mb-8' placeholder="" type="text" id="resp" name="resp" required></textarea></div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="flex flex-col w-full max-w-[400px]">
                                    <div className='mb-2'><label htmlFor="start">Qualifications</label></div>
                                    <div className='flex justify-center'><textarea className='border border-blue-400 rounded-lg w-full max-w-[400px] pl-2 h-52 mb-8' placeholder="" type="text" id="qual" name="qual" required></textarea></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className='mt-8 mx-auto rounded-lg text-xl w-full max-w-[280px] h-16 bg-blue-700 text-slate-50 mb-8 | lg:w-[250px]'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateResume;