// Create react component login page with similar styling to the landing page
import Navi from './Navi';
import { useCallback, useContext } from 'react'
import { auth, signInWithEmailAndPassword } from './firebase.js'
import { AuthContext } from "./Auth.js"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = useCallback(async event => {
        event.preventDefault()
        const userEmail = event.target.elements[0].value
        const password = event.target.elements[1].value
        try {
            await signInWithEmailAndPassword(auth, userEmail, password)
        } catch (err) {
            alert(err)
        }
    }, [])

    const { currUser } = useContext(AuthContext)
    if (currUser) {
        navigate("/")
    }
    return (
        <div>
            <Navi />
            <div className="flex flex-col justify-center items-center mt-12">
                <h1 className='text-3xl font-bold mb-12 text-center | md:text-5xl'>Welcome back!</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <input type="email" className='border border-blue-400 rounded-lg w-full max-w-[400px] pl-2 h-12 mb-8 | lg:w-[250px]' placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className='border border-blue-400 rounded-lg w-full max-w-[400px] h-12 pl-2 mb-8 | lg:w-[250px]' placeholder="Password" />
                    </div>
                    <button className='rounded-lg w-full max-w-[400px] h-12 bg-blue-700 text-slate-50 mb-8 | lg:w-[250px]'>Login</button>
                </form>
            </div>
        </div>
    );
}
export default Login;