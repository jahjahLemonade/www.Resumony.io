// Resume creation page, this page will be used comfirm what Openai return back or discard.
import axios from 'axios';
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Navi from './Navi';
import { db, collection, addDoc } from "./firebase";
// import Markdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'

//Make a private route for this page
const CreatingResume = () => {
  // const { currUser } = useContext(AuthContext);
  const resume = useLocation().state.resume;
  let second = false;
  const [content, setContent] = useState('');
  const [pending, setPending] = useState(true)
  const navigate = useNavigate();

  const saveResume = () => {
    // save the resume to the firestore database
    try {
      const addResume = async () => {
        const docRef = await addDoc(collection(db, "resumes"), {
          summary: resume.summary,
          experience: resume.experience,
          company: resume.company,
          role: resume.role,
          resp: resume.resp,
          qual: resume.qual,
          content: content
        });
        addResume();
        console.log("Document written with ID: ", docRef.id);
        navigate('/')
      }
    }
    catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  const discardResume = () => {
    navigate('/create');
  }
  //q: why is useEffect rendering twice?  

  useEffect(() => {
    // get the resume from the server after second render
    if (second == true) {
      try {
        const fetchResume = async () => {
          const response = await axios.post('http://localhost:3001/createResume', resume);
          const json_content = JSON.parse(response.data.content);
          setContent(json_content);
          setPending(false);
          console.log(json_content)
          console.log(typeof json_content);
        }
        fetchResume();
      } catch (error) {
        console.error(error);
      }
    }
    second = true;
  }, [])

  return (
    <div>
      {
        pending ?
          (<div className='flex h-[800px] items-center justify-center text-4xl font-bold'>Generating...</div>)
          :
          (<div>
            <Navi />
            <div className='flex flex-col items-center justify-center mt-16 px-4'>
              <h1 className='text-xl font-bold mb-12 text-center | md:text-2xl | lg:text-4xl | xl:text-4xl'>Generated info based on your inputs:</h1>
              <div className='w-full max-w-[800px] text-lg my-8 | lg:text-xl'>
                <h1 className='font-bold underline'>Summary</h1>
                <p>{content['summary']}</p>
                <h1 className='font-bold underline mt-4'>Work Experience</h1>
                ({content['work_experience'].map((resp, index) => {
                  return (
                    <div key={index}>
                      <p>{content['job_title']}</p>
                      <p>{content['company']}</p>
                      <p>{content['location']}</p>
                      <p>{content['duration']}</p>
                      ({content['responsibilites'].map((resp, index) => {
                        return <li key={index}>{resp}</li>
                      })})
                    </div>
                  )
                }
                )})
                {/* button to either delete or save output in the database */}
                <div className='flex flex-col md:flex-row'>
                  <button onClick={saveResume} className='mt-8 mx-auto rounded-lg text-xl w-full max-w-[280px] h-16 bg-blue-700 text-slate-50 mb-8 | lg:w-[250px]'>Save</button>
                  <button onClick={discardResume} className='mt-8 mx-auto rounded-lg text-xl w-full max-w-[280px] h-16 bg-blue-700 text-slate-50 mb-8 | lg:w-[250px]'>Discard</button>
                </div>
              </div>)
            </div>
          </div>
          )
      }
    </div>
  )
}

export default CreatingResume