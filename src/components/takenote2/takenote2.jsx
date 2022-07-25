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

function Takenote2() {
    return (
        <>
            <div className="note2-outerbox">

                <div className="note2-innerbox">

                    <div className='takenote2-box-1'>

                        <TextareaAutosize className='takenote2-input' type='text' placeholder='Title' />
                        <IconButton id='takenote2-pinnote' aria-label="pin-note" size='small'>
                            <PushPinOutlinedIcon />
                        </IconButton>
                    </div>

                    <div className='takenote2-box-2'>
                        <TextareaAutosize className='takenote2-input' type='text' placeholder='Take a note...' />
                    </div>

                    <div className='takenote2-box-3'>

                        <div className="icon-class">

                            <IconButton className='takenote2-icon-button' aria-label="New list" size='small'>
                                <AddAlertOutlinedIcon className='icon' />
                            </IconButton>

                            <IconButton className='takenote2-icon-button' aria-label="New list" size='small'>
                                <PersonAddAltOutlinedIcon className='icon' />
                            </IconButton>   

                            <IconButton className='takenote2-icon-button' aria-label="Color popper" size='small'>
                                <ColorLensOutlinedIcon className='icon' />
                            </IconButton>  

                            <IconButton className='takenote2-icon-button' aria-label="Image" size='small'>
                                <ImageOutlinedIcon className='icon' />
                            </IconButton>  

                            <IconButton className='takenote2-icon-button' aria-label="Archieve note" size='small'>
                                <ArchiveOutlinedIcon className='icon' />
                            </IconButton>  

                            <IconButton className='takenote2-icon-button' aria-label="Image" size='small'>
                                <MoreVertOutlinedIcon className='icon' />
                            </IconButton>  

                        </div>

                        <button type='submit' className='closeButton'>Close</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Takenote2