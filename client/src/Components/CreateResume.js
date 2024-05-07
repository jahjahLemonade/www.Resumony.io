// This is the page where we create a new resume and add it to firebase under "resume" document
//
// Compare this snippet from client/src/Components/ViewResume.js:
// Resume fields are displayed on the page
// isable create button til all fields are filled out
// Summary – [Input Your Summary]
// Experience – [Input your data about company description with Start and end dates, details about what you did with a focus on skills and achievements]
// Technical Skills – [Input Your skills set]
// Soft Skills – [Input your Soft Skills]
// Achievements – [Input Your Achievements]

import Navi from './Navi';

const CreateResume = () => {
    const handleResume = async (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const address = event.target.elements.address.value;
        const phone = event.target.elements.phone.value;
        const email = event.target.elements.email.value;
        const objective = event.target.elements.objective.value;
        const education = event.target.elements.education.value;
        const experience = event.target.elements.experience.value;
        const skills = event.target.elements.skills.value;
        const projects = event.target.elements.projects.value;

        const resume = {
            name: name,
            address: address,
            phone: phone,
            email: email,
            objective: objective,
            education: education,
            experience: experience,
            skills: skills,
            projects: projects
        }
        console.log(resume);
    }
    return (
        <div>
        <Navi />
        <div className="flex flex-col border-2 border-green-700 px-4">
            <div className='flex justify-center border-2 border-red-600'><h1 className='text-2xl md:text-3xl font-bold my-6'>Create Resume</h1></div>
            <form onSubmit={handleResume} className="flex flex-col border-2 border-yellow-300">
                <div className="flex flex-row border-4 border-purple-700 | md:justify-center">
                    <div className="flex flex-col w-full max-w-[500px] | md:border-2 md:border-purple-200">
                        <div className='ml-12'><label htmlFor="summary">Career Summary:</label></div>
                        <div className='flex justify-center'><input className='border border-blue-400 rounded-lg w-full max-w-[400px] pl-2 h-12 mb-8' placeholder="Summary" type="text" id="summary" name="summary" required></input></div>
                    </div>
                </div>
                <div className="flex flex-row border-4 border-purple-700 | md:justify-center">
                    <div className="flex flex-col w-full max-w-[500px] | md:border-2 md:border-purple-200">
                    <div className='ml-12'><label htmlFor="experience">Work Experience:</label></div>
                    <div className='flex justify-center'><input className='border border-blue-400 rounded-lg w-full max-w-[400px] pl-2 h-12 mb-8' placeholder="Experience" type="text" id="experience" name="experience" required></input></div>
                    </div>
                </div>
                <div className="flex flex-row border-4 border-purple-700 | md:justify-center">
                <div className="flex flex-col w-full max-w-[500px] | md:border-2 md:border-purple-200">
                <div className='ml-12'><label htmlFor="projects">Personal Projects:</label></div>
                <div className='flex justify-center'><input className='border border-blue-400 rounded-lg w-full max-w-[400px] pl-2 h-12 mb-8' placeholder="Projects" type="text" id="projects" name="projects" required></input></div>
                    </div>
                </div>
                <div className="flex flex-row border-4 border-purple-700 | md:justify-center">
                <div className="flex flex-col w-full max-w-[500px] | md:border-2 md:border-purple-200">
                <div className='ml-12'><label htmlFor="skills">All Skills:</label></div>
                <div className='flex justify-center'><input className='border border-blue-400 rounded-lg w-full max-w-[400px] pl-2 h-12 mb-8' placeholder="Skills" type="text" id="skills" name="skills" required></input></div>
                    </div>
                </div>
               <button type="submit" className='mx-auto rounded-lg text-xl w-full max-w-[280px] h-16 bg-blue-700 text-slate-50 mb-8 | lg:w-[250px]'>Submit</button>
            </form>
        </div>
        </div>
    );
}

export default CreateResume;

