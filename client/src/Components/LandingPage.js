import React from 'react';
import { Link } from 'react-router-dom';
import Navi from './Navi';
import rating from '../assets/rating.svg';
import featureOne from '../assets/feature1.svg';
import featureTwo from '../assets/feature2.svg';
import featureThree from '../assets/feature3.svg';
import img2 from '../assets/image 2.svg';
import img3 from '../assets/image 3.svg';
import img4 from '../assets/image 4.svg';
import img5 from '../assets/image 5.svg';
import img6 from '../assets/image 6.svg';
import img7 from '../assets/image 7.svg';
import harmony from '../assets/harmony.svg';
import hero from '../assets/hero.svg';

const LandingPage = () => { 
    return ( 
        <div className='max-w-[2200px] mx-auto'>
            <Navi />
            <div className='mt-16 mb-24 | flex flex-col justify-between items-center | lg:flex-row lg:px-10 | xl:px-32 | 2xl:px-52'>
                <img src={hero} alt='lady' className='w-full h-50 text-center mb-12 | md:h-72 md:mb-8 | max-w-[600px] lg:h-full lg:order-last | xl:h-[500px] | 2xl:max-w-[700px] 2xl:h-[550px]'/>
                    <div className='flex flex-col h-[420px] justify-center | lg:max-w-[620px] | xl:justify-around'>
                        <h1 className='text-4xl font-semibold text-center | lg:w-[390px] lg:text-left | xl:w-full xl:text-6xl'>Build Harmony Between Your Resume and <span className='text-blue-600'>Dream Job.</span></h1>
                        <p className='text-md text-center font-light my-8 | lg:text-lg lg:text-left'>All-in-One Platform for Rewriting and Storing Resumes Optimized for Any Job Description. Ensuring Every Application is Tailored for Success.</p>
                        <div className='flex justify-center px-4 | lg:justify-start lg:px-0'><button className='rounded-lg w-full max-w-[400px] lg:text-md h-16 bg-blue-600 text-slate-50 mb-8 | lg:w-[250px]'>Get Started</button></div>
                    </div>
            </div>
            <div className='w-full bg-blue-100 mb-8 p-4 flex flex-col items-center'>
                <h1 className='text-2xl font-semibold text-center text-blue-600 mb-4 mt-8'>We’ve helped job seekers secure jobs at top companies</h1>
                <p className='text-md text-center font-light'>Discover the companies where our users have successfully launched their careers</p>
                <div className='w-full max-w-[1000px] grid grid-cols-2 place-items-center my-12 gap-8 | md:grid-cols-6'>
                    <img src={img5} alt='img5' className='w-24' />
                    <img src={img6} alt='img6' className='w-24' />
                    <img src={img7} alt='img7' className='w-24' /> 
                    <img src={img2} alt='img2' className='w-24' />
                    <img src={img3} alt='img3' className='w-24' /> 
                    <img src={img4} alt='img4' className='w-24' />
                </div>
            </div>
            <div>
                <h1 className='text-center text-xl font-semibold text-blue-600'>Features</h1>
                <p className='text-center text-md font-light mb-8'>Explore our platform’s top features</p>
            </div>
            <div className=' flex flex-col justify-center items-center | px-4 | lg:px-10 lg:flex-row'>
                {/* 3 cards */}
                <div className='flex flex-col justify-center items-center w-full h-[400px] shadow-sm rounded-lg bg-[#f9fafb] px-2 max-w-[350px]'>
                   <div className='w-full'><img src={featureOne} alt='f2' className='w-full h-full' /></div>
                    <h1 className='text-3xl text-center font-semibold mt-8 mb-2'>Let AI rewrite your resume.</h1>
                    <p className='text-center | xl:text-left mb-12 mx-8'>Refine your resume to precisely fit job requirements. Create one tailored document for each application</p>
                </div>
                <div className='flex flex-col justify-center items-center w-full h-[400px] shadow-sm rounded-lg bg-[#f9fafb] my-8 px-2 max-w-[350px] lg:my-0 lg:mx-4 | xl:mx-10'>
                    <div className='w-full'><img src={featureTwo} alt='f2' className='w-full h-full' /></div>
                    <h1 className='text-3xl text-center font-semibold mt-8 mb-2'>Have an organized resume hub.</h1>
                    <p className='text-center | xl:text-left mb-12 mx-8'>Simplify your job search with a built-in resume management system, keeping all your resumes in one place.</p>
                </div>
                <div className='flex flex-col justify-center items-center w-full h-[400px] shadow-sm rounded-lg bg-[#f9fafb] px-2 max-w-[350px]'>
                   <div className='w-full'><img src={featureThree} alt='f3' className='w-full h-full' /></div>
                    <h1 className='text-3xl text-center font-semibold mt-8 mb-2'>Save hours of manual work.</h1>
                    <p className='text-center | xl:text-left mb-12 mx-8'>Let Resumony take care of your resume update in minutes, saving you valuable time.</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full h-full bg-blue-100 px-2 my-8 | lg:flex-row lg:justify-around lg:py-20 | 2xl:px-28'>
                <div>
                    <img src={harmony} alt='lady' className='w-full h-50 text-center max-w-[480px] | md:h-72 | lg:h-[400px]| xl:h-[400px] | 2xl:max-w-[600px] 2xl:h-[450px]'/>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl text-center font-semibold text-blue-600 mt-8'>Unlock Your Career Potential!</h1>
                    <p className='max-w-[500px] text-md text-center font-light my-8'>Experience our advanced AI Resume Tool first-hand. Get exclusive perks and help shape our product with your feedback. Join us – no spam, no personal info selling. Just pure career enhancement!</p>             
                    <Link to='/signup' className='flex justify-center items-center text-lg rounded-lg w-full max-w-[400px] h-12 bg-blue-600 text-slate-50 mb-8 | lg:w-[250px]'>Join now</Link>
                </div>
            </div>
            <div className='my-8 px-4'>
                <h1 className='text-center text-xl font-semibold text-blue-600'>Testimonials</h1>
                <p className='text-md text-center font-light'>Don’t take our word for it. Trust our early users.</p>
            </div>
            <div className='px-4 flex flex-col justify-center items-center | lg:flex-row lg:mb-16'>
                {/* 3 cards */}
                <div className='flex flex-col shadow-md rounded-lg justify-around items-center w-full h-72 bg-slate-50 text-center p-4 max-w-[300px] | xl:max-w-[350px]'>
                    <img src={rating} alt='rating' className='w-36 h-8' />
                    <p className='font-light'>After two unsuccessful months of job hunting, Resumony precisely matched my skills to a dream job's needs, landing me an interview within 2 weeks. It was a game-changer.</p>
                    <p className='font-semibold text-blue-600'>Jonathan</p>
                </div>
                <div className='flex flex-col shadow-md rounded-lg justify-around items-center w-full h-72 bg-slate-50 text-center my-8 p-4 max-w-[300px] lg:my-0 lg:mx-4 | xl:max-w-[350px] xl:mx-10'>
                    <img src={rating} alt='rating' className='w-36 h-8' />
                    <p className='font-light'>I’m amazed at how Resumony transforms job searching. My favorite feature is the resume hub which keeps all my versions neatly organized. A true career accelerator</p>
                    <p className='font-semibold text-blue-600'>Charlotte</p>
                </div>
                <div className='flex flex-col shadow-md rounded-lg justify-around items-center w-full h-72 bg-slate-50 text-center p-4 mb-16 max-w-[300px] | lg:mb-0 | xl:max-w-[350px]'>
                    <img src={rating} alt='rating' className='w-36 h-8' />
                    <p className='font-light'>I already knew the importance of adapting my resume to each job I applied to. The fact that Resumony does it instantly saved me so many hours of work. It’s a time saver.</p>
                    <p className='font-semibold text-blue-600'>Paul</p>
                </div>
            </div>
            {/* FAQ
            <div className='my-8'>
                <h1 className='text-center text-xl font-semibold text-blue-600'>FAQ</h1>
                <p className='text-md text-center'>Have questions? We’ve got answers.</p>
                <div className='flex flex-col mt-4'>
                    <div><p>Question #1</p></div>
                    <div><p>Question #2</p></div>
                    <div><p>Question #3</p></div>
                    <div><p>Question #4</p></div>
                    <div><p>Question #5</p></div>
                </div>
            </div> */}
            {/* Footer */}
            <div className='w-full h-16 bg-blue-600 flex justify-center items-center'>
                <p className='text-slate-50 m-0'>©2024 Resumony</p>
            </div>
        </div>
    )
}
export default LandingPage;