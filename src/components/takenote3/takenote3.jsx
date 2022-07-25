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
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

function Takenote3() {
    return (
        <>
            <div className="takenote3-outer-box">

                <Tooltip title="Select note">
                    <CheckCircleRoundedIcon id='note3_select-note' />
                </Tooltip>

                <div className="note3_content">

                    <div className="takenote3-box1">

                        <div role="textbox" title='title' className='takenote3-title'>
                            Title
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

                <div title="body" className="takenote3-box2">
                    Description
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

                    <Tooltip title='Color Popper'>
                        <IconButton className='takenote3_icon-button' aria-label="New list" size='small'>
                            <ColorLensOutlinedIcon className='icon' />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title='Add image'>
                        <IconButton className='takenote3_icon-button' aria-label="New list" size='small'>
                            <ImageOutlinedIcon className='icon' />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title='Archive'>
                        <IconButton className='takenote3_icon-button' aria-label="New list" size='small'>
                            <ArchiveOutlinedIcon className='icon' />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title='Delete note'>
                        <IconButton className='takenote3_icon-button' aria-label="New list" size='small'>
                            <DeleteOutlinedIcon className='icon' />
                        </IconButton>
                    </Tooltip>

                </div>
            </div>
        </>
    )
}

export default Takenote3