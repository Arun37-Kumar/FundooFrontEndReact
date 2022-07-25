import TextField from '@mui/material/TextField';
import Header from './components/header/header';
import Takenote1 from './components/takenote1/takenote1';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';


function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      {/* <Signin /> */}
      <Header />
      <Takenote1 />
    </div>
  );
}

export default App;
