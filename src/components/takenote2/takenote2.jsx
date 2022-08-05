import React from 'react';
import './takenote2.css';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import IconButton from '@mui/material/IconButton';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import Tooltip from '@mui/material/Tooltip';
import { createNote } from '../../services/dataservice';
import ColorPopper from '../colorpopper/colorpopper';

function Takenote2(props) {
    const [noteObj, setNoteObj] = React.useState({ Title: "", Description: "", Reminder: "", Colour: "", Image: "", Archieve: false, Trash: false, Pinned: false });

    const takeArchieve = (event) => {
        setNoteObj((prevState) => ({ ...prevState, Archieve: !event.target.Archieve }));
    }

    const takeTitle = (event) => {
        setNoteObj((prevState) => ({ ...prevState, Title: event.target.value }));
    }

    const takeNote = (event) => {
        setNoteObj((prevState) => ({ ...prevState, Description: event.target.value }));
    }

    const listenToPopper = (color) => {
        setNoteObj((prevState) => ({ ...prevState, Colour: color }));
    }

    const submitClose = () => {
        createNote(noteObj).then((response) => {
            console.log(response)
        }).catch((error) => { console.log(error) })
    }



    return (
        <> 
            <div  className="note2-outerbox">

                <div style={{ backgroundColor: noteObj.Colour }} className="note2-innerbox">

                    <div style={{ backgroundColor: noteObj.Colour }} className='takenote2-box-1'>

                        <TextareaAutosize style={{ backgroundColor: noteObj.Colour }} onChange={takeTitle} className='takenote2-input' type='text' placeholder='Title' />
                        <Tooltip title='Pin note'>
                            <IconButton id='takenote2-pinnote' aria-label="pin-note" size='small'>
                                <PushPinOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </div>

                    <div style={{ backgroundColor: noteObj.Colour }} className='takenote2-box-2'>
                        <TextareaAutosize style={{ backgroundColor: noteObj.Colour }} onChange={takeNote} className='takenote2-input' type='text' placeholder='Take a note...' />
                    </div>

                    <div style={{ backgroundColor: noteObj.Colour }} className='takenote2-box-3'>

                        <div className="icon-class">
                            <Tooltip title='Remind me'>
                                <IconButton className='takenote2-icon-button' aria-label="New list" size='small'>
                                    <AddAlertOutlinedIcon className='icon' />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title='Add me'>
                                <IconButton className='takenote2-icon-button' aria-label="New list" size='small'>
                                    <PersonAddAltOutlinedIcon className='icon' />
                                </IconButton>
                            </Tooltip>


                            <IconButton className='takenote2-icon-button' aria-label="Color popper" size='small'>
                                <ColorPopper action='create' listenToPopper={listenToPopper} />
                            </IconButton>


                            <Tooltip title='Add Image'>
                                <IconButton className='takenote2-icon-button' aria-label="Image" size='small'>
                                    <ImageOutlinedIcon className='icon' />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title='Archieve'>
                                <IconButton onClick={takeArchieve} className='takenote2-icon-button' aria-label="Archieve note" size='small'>
                                    <ArchiveOutlinedIcon className='icon' />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title='More'>
                                <IconButton className='takenote2-icon-button' aria-label="Image" size='small'>
                                    <MoreVertOutlinedIcon className='icon' />
                                </IconButton>
                            </Tooltip>

                        </div>

                        <button onClick={submitClose} type='submit' className='closeButton'>Close</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Takenote2