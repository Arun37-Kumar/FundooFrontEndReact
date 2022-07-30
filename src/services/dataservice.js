import axios from "axios";

let configObj= {
    headers: {
      Authorization:  `Bearer ${localStorage.getItem('token')}`
    },
  }

export const createNote = (noteObj) => {
    let response = axios.post('https://localhost:44376/api/Notes/AddNotes',noteObj,configObj);
    return response;
}

export const getNotes = () => {
  console.log(configObj)
  let response = axios.get('https://localhost:44376/api/Notes/GetNotes',configObj)
  return response;
}


