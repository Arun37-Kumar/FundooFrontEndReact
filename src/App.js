import TextField from '@mui/material/TextField';
import Header from './components/header/header';
import Takenote1 from './components/takenote1/takenote1';
import Takenote2 from './components/takenote2/takenote2';
import Takenote3 from './components/takenote3/takenote3';
import Dashboard from './pages/Dashboard/dashboard';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';


function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      {/* <Signin /> */}
      {/* <Header />
      <Takenote1 />
      <Takenote2 />
      <Takenote3 /> */}
      <Dashboard />
      <Takenote3 />
      <Takenote3 />
    </div>
  );
}

export default App;
