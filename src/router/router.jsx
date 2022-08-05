import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard/dashboard';
import Signin from '../pages/signin/signin';
import Signup from '../pages/signup/signup';

function ReactRouter() {
  //  const navigate = useNavigate();
  return (
    <>
    
    <Router>
        <Routes>
          <Route path="/" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  )
}

export default ReactRouter