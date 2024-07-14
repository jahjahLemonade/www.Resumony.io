// Desc: Signout navi bar for the website
import { Link } from "react-router-dom";
//import assets
import logo from '../assets/logo.svg';
import { auth, signOut } from './firebase.js'

const Signout = () => {
  const handleSignout = async (e) => {
    if (e.target.innerText === "Logout") {
      await signOut(auth);
    }
  }
  return (
    <nav className='border border-slate-300 flex justify-between items-center p-2 sm:p-4 | xl:px-20'>
      <div>
        {/* Make logo a link to the home page */}
        <Link to='/'><img src={logo} alt='logo' className='w-28 h-10 | md:w-40' /></Link>
      </div>
      <div className='flex'>
      <Link className='flex justify-center items-center w-24 h-8 rounded-md border-2 border-blue-700 text-blue-700 mx-2 | md:w-28 md:h-12 | xl:mr-8' to='/feedback'>Feedback</Link>
      <Link className='flex justify-center items-center w-24 h-8 rounded-md bg-blue-700 text-slate-50 | md:w-28 md:h-12' to='/login' onClick={handleSignout}>Logout</Link>
      </div>
    </nav> 
  );
}
export default Signout;
