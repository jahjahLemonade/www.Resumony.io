import LandingPage from "./Components/LandingPage";
// Need to import react router dom to use the Link component
// Need route for sigfnup and login
// Need to import the signup and login components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute.js';
import UserPage from './Components/UserPage.js';
import Feedback from './Components/Feedback.js';
import { AuthProvider } from './Components/Auth.js';
import CreateResume from "./Components/CreateResume.js";
import CreatingResume from "./Components/CreatingResume.js";
import PaymentMonthly from "./Components/PaymentMonthly.js";
import PaymentFE from "./Components/PaymentFE.js";
import Return from "./Components/Return.js";
import PaymentPlans from "./Components/PaymentPlans.js";
import AlertPage from "./Components/AlertPage.js";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<PrivateRoute element={<UserPage />} />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create' element={<CreateResume />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/resume' element={<CreatingResume />} />
            <Route path='/monthly' element={<PaymentMonthly />} />
            <Route path='/frontend' element={<PaymentFE />} />
            <Route path="/return" element={<Return />} />
            <Route path="/plans" element={<PaymentPlans/>} />
            <Route path="/alert" element={<AlertPage/>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}
export default App;
