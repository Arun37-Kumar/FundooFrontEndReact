import TextField from '@mui/material/TextField';
import Header from './components/header/header';
import Takenote1 from './components/takenote1/takenote1';
import Takenote2 from './components/takenote2/takenote2';
import Takenote3 from './components/takenote3/takenote3';
import Dashboard from './pages/Dashboard/dashboard';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';
import React from 'react';


function App() {
  const [noteSwitch,setNoteSwitch] = React.useState(false);
  return (
    <div className="App">
      {/* <Signup/> */}
      {/* <Signin /> */}
      {/* <Takenote1 /> */}
      {/* <Takenote2 /> */}
      {/* <Takenote3 />  */}
      {/* <Header /> */}
      {/* {  noteSwitch ? <Takenote2/> : <Takenote1/> } */}
      <Dashboard />
    </div>
  );
}

export default App;
