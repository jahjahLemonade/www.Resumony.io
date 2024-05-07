// Desc: Navigation bar for the website
import { Link } from "react-router-dom";
//import assets
import logo from '../assets/logo.svg';
import { AuthContext } from "./Auth.js";
import Signout from "./Signout.js";
import { Fragment, useContext } from "react";

const Navi = () => {
  const { currUser } = useContext(AuthContext);
  return (
    currUser ? (<Signout />) : (
      <nav className='border border-slate-300 flex justify-between items-center p-2 sm:p-4 | xl:px-20'>
        <div>
          {/* Make logo a link to the home page */}
          <Link to='/'><img src={logo} alt='logo' className='w-40 h-10' /></Link>
        </div>
        <div className='flex'>
          <Link className='flex justify-center items-center w-28 h-12 rounded-md border-2 border-blue-700 text-blue-700 mr-2 | xl:mr-8' to='/login'>Sign in</Link>
          <Link className='flex justify-center items-center w-28 h-12 rounded-md bg-blue-700 text-slate-50' to='/signup'>Get started</Link>
        </div>
      </nav>)
  )
}
export default Navi;

