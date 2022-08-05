import React from 'react'
import './takenote3.css'
import IconButton from '@mui/material/IconButton';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Tooltip from '@mui/material/Tooltip';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ColorPopper from '../colorpopper/colorpopper';
import { archieveNote, editNotes } from '../../services/dataservice';
// IMPORTS FOR MODAL
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
//Box modal 
import { TextareaAutosize } from '@mui/material';
import './notemodal.css';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Takenote3(props) {

    // MODAL USESTATES 
    const [open, setOpen] = React.useState(false);
    const [note, setNote] = React.useState({})
    const handleOpen = (note) => {
        setNote({ ...note, Title: note.Title, Description: note.Description });
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const takeArchieve = () => {
        archieveNote(props.note.notesId)
            .then((res) => console.log(res))
            .catch((error) => console.log(error))
    }

    const submit = () => {
        editNotes(note)
            .then((response) => { console.log(response); })
            .catch((error) => { console.log(error); })

        handleClose();
    }

    const changeTitle = (event) => {
        setNote({ ...note, Title: event.target.value })
    }
    const changeDescription = (event) => {
        setNote({ ...note, Description: event.target.value })
    }

    return (
        <>
            <div style={{ backgroundColor: props.note.colour }} className="takenote3-outer-box">

                <Tooltip title="Select note">
                    <CheckCircleRoundedIcon id='note3_select-note' />
                </Tooltip>

                <div className="note3_content">

                    <div className="takenote3-box1">

                        <div onClick={() => handleOpen(props.note)} role="textbox" title='title' className='takenote3-title'>
                            {props.note.title}
                        </div>

                        <div className="takenote3-pin">
                            <Tooltip title="Pin note">
                                <IconButton id='note3_pin-note' aria-label="pin-note" size='small'>
                                    <PushPinOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <div onClick={() => handleOpen(props.note)} title="body" className="takenote3-box2">
                    {props.note.description}
                </div>

                <div className="takenote3-box3">

                    <Tooltip title='Remind me'>
                        <IconButton className='takenote3_icon-button' aria-label="New list" size='small'>
                            <AddAlertOutlinedIcon className='icon' />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title='Collaborator'>
                        <IconButton className='takenote3_icon-button' aria-label="New list" size='small'>
                            <PersonAddAltOutlinedIcon className='icon' />
                        </IconButton>
                    </Tooltip>


                    <IconButton className='takenote3_icon-button' aria-label="New list" size='small'>
                        <ColorPopper action='update' id={props.note.notesId} className='icon' />
                    </IconButton>


                    <Tooltip title='Add image'>
                        <IconButton className='takenote3_icon-button' aria-label="New list" size='small'>
                            <ImageOutlinedIcon className='icon' />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title='Archive'>
                        <IconButton className='takenote3_icon-button' aria-label="New list" size='small'>
                            <ArchiveOutlinedIcon onClick={takeArchieve} className='icon' />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title='Delete note'>
                        <IconButton className='takenote3_icon-button' aria-label="New list" size='small'>
                            <DeleteOutlinedIcon className='icon' />
                        </IconButton>
                    </Tooltip>
                </div>


                {/* Code added here for MODAL  */}

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  
                >
                    <Box className='modal-box' style={{ backgroundColor: props.note.colour }} sx={style}>
                        {/* 1 - MODAL BOX - 1 */}
                        <div className="modal-box-1">
                            <TextareaAutosize onChange={changeTitle} className='modal-input' id='modal_title' type='text' defaultValue={note.title} placeholder='Title' style={{ backgroundColor: props.note.colour }} />

                            <div className="modal-box-pinicon">

                                <Tooltip title='Pin note'>
                                    <IconButton id='modal-pin-note' aria-label="pin-note" size='small'>
                                        <PushPinOutlinedIcon />
                                    </IconButton>
                                </Tooltip>

                            </div>

                        </div>
                        {/* 2 - MODAL BOX - 2 */}
                        <div style={{ backgroundColor: props.note.colour }} className="modal-box-2">
                            <TextareaAutosize onChange={changeDescription} className='modal-input' id='modal_body' type="text" defaultValue={note.description} placeholder='Take a note...' style={{ backgroundColor: props.note.colour }} />
                        </div>

                        {/* 3 - MODAL BOX - 3 */}
                        <div className="modal-box-3">

                            {/* 3.1 - MODAL ICONS */}
                            <div className="modal-icon-group">
                                <Tooltip title='Remind me'>
                                    <IconButton className='modal_icon-button' aria-label="New list" size='small'>
                                        <AddAlertOutlinedIcon className='icon' />
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title='Collaborator'>
                                    <IconButton className='modal_icon-button' aria-label="New list" size='small'>
                                        <PersonAddAltOutlinedIcon className='icon' />
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title='color popper'>
                                    <IconButton>
                                    <ColorPopper action='update' className='icon'/>
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title='Add image'>
                                    <IconButton className='modal_icon-button' aria-label="New list" size='small'>
                                        <ImageOutlinedIcon className='icon' />
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title='Archive'>
                                    <IconButton className='modal_icon-button' aria-label="New list" size='small'>
                                        <ArchiveOutlinedIcon className='icon' />
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title='More'>
                                    <IconButton className='modal_icon-button' aria-label="New list" size='small'>
                                        <MoreVertOutlinedIcon className='icon' />
                                    </IconButton>
                                </Tooltip>

                            </div>

                            <div className="close-button">
                            <button onClick={submit} type='submit' className='close-button'>Close</button>
                            {/* <Button variant="text" onClick={submit} type='submit' className='close-button'>Close</Button> */}
                            </div>

                        </div>

                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default Takenote3