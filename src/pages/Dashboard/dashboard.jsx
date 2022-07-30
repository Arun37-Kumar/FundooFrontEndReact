import React from 'react'
import Header from '../../components/header/header'
import Takenote1 from '../../components/takenote1/takenote1'
import Takenote2 from '../../components/takenote2/takenote2'
import Takenote3 from '../../components/takenote3/takenote3'
import { getNotes } from '../../services/dataservice'
import './dashboard.css'
import { useState } from 'react'

function Dashboard() {
  const [noteSwitch,setNoteSwitch] = useState(false);
  const [notesArray,setNotesArray] = useState([]);
  
  const listenToHeader = () => {
    setNoteSwitch(true)
  }
React.useEffect(() => {
  getNotes().then((response) => {
    setNotesArray(response.data.data)
    console.log(response)
}).catch((error) => {console.log(error)})
},[])
console.log(notesArray);

  return (
    <>
    <Header />
      {noteSwitch ? <Takenote2/>:<Takenote1 listenToHeader={listenToHeader}/>}
    <div className='takenote3-design'>{notesArray.map((note) => <Takenote3 note ={note}/> )}</div>
    </>
  )
}

export default Dashboard