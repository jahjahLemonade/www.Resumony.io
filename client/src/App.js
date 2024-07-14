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
import Payment from "./Components/Payment.js";
import Return from "./Components/Return.js";
import PaymentPlans from "./Components/PaymentPlans.js";

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
            <Route path='/creatingResume' element={<CreatingResume />} />
            <Route path='/payment' element={<Payment />} />
            <Route path="/return" element={<Return />} />
            <Route path="/paymentplans" element={<PaymentPlans/>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}
export default App;
