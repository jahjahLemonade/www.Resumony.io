import React from "react";
import { db, doc, getDocs, updateDoc, deleteField } from "./firebase.js";

const Modal = ({ resume_key, resume }) => {
  console.log(resume)
  const [showModal, setShowModal] = React.useState(false);

  // Date MM/DD/YYYY variable
    const date = new Date().toLocaleDateString();

  // Delete resume in firebase store
    const deleteResume = async (resume_key) => {
        const updateRef = doc(db, "resumes", 'test@email.com')
        // Use updateDoc to delete field in firestore document
        // Also need to filter out resume from resume var
        await updateDoc(updateRef, {
          [`resume_${resume_key}`]: deleteField()
        })
        resume[resume_key].delete()
        window.location.reload()
    }

  return (
      <>
        <button
          className="w-full max-w-[150px] h-44 flex flex-col justify-center items-center mb-6 rounded-lg bg-blue-700 text-white active:bg-blue-600  px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
        {/* Use key to make sure resume exist in resume var */}
        <p>{resume[`resume_${resume_key}`].company}</p>
        <p>{resume[`resume_${resume_key}`].role}</p>
        <p>{date}</p>
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      {`Resume #${resume_key+1}`}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-red-700 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      <h1 className="font-bold mb-2">Company</h1>
                      <div className="mb-4">{resume[`resume_${resume_key}`].company}</div>
                      <h1 className="font-bold mb-2">Role</h1>
                      <div className="mb-4">{resume[`resume_${resume_key}`].role}</div>
                      <h1 className="font-bold mb-2">Summary</h1>
                      <div className="mb-4">{resume[`resume_${resume_key}`].summary}</div>
                      <h1 className="font-bold mb-2">Experience</h1>
                      <div className="mb-4"><textarea className="w-full h-64">{resume[`resume_${resume_key}`].experience}</textarea></div>
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-blue-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => deleteResume(resume_key)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
}

export default Modal;