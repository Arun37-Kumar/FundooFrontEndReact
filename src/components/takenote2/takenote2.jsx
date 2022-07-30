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

function Takenote2() {
    const [noteObj,setNoteObj] = React.useState({Title : "", Description : "",Reminder : "",Colour : "",Image : "",Archieve : false, Trash : false, Pinned : false});

    const takeTitle = (event) => {
        setNoteObj((prevState) => ({ ...prevState, Title: event.target.value }));
    }

    const takeNote = (event) => {
        setNoteObj((prevState) => ({ ...prevState, Description: event.target.value }));
    }

    const submitClose = () => {
        createNote(noteObj).then((response) => {
            console.log(response)
        }).catch((error) => {console.log(error)})
    }

    return (
        <>
            <div className="note2-outerbox">

                <div className="note2-innerbox">

                    <div className='takenote2-box-1'>

                        <TextareaAutosize onChange={takeTitle} className='takenote2-input' type='text' placeholder='Title' />
                        <Tooltip title='Pin note'>
                            <IconButton id='takenote2-pinnote' aria-label="pin-note" size='small'>
                                <PushPinOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </div>

                    <div className='takenote2-box-2'>
                        <TextareaAutosize onChange={takeNote} className='takenote2-input' type='text' placeholder='Take a note...' />
                    </div>

                    <div className='takenote2-box-3'>

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
                            <Tooltip title='Background Options'>
                                <IconButton className='takenote2-icon-button' aria-label="Color popper" size='small'>
                                    <ColorLensOutlinedIcon className='icon' />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title='Add Image'>
                                <IconButton className='takenote2-icon-button' aria-label="Image" size='small'>
                                    <ImageOutlinedIcon className='icon' />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title='Archieve'>
                                <IconButton className='takenote2-icon-button' aria-label="Archieve note" size='small'>
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