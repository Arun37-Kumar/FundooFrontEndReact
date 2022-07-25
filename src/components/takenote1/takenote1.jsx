import React from 'react';
import './takenote1.css';
import IconButton from '@mui/material/IconButton';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import InputBase from '@mui/material/InputBase';
import { Tooltip } from '@mui/material';

function Takenote1() {
    return (
        <>
            <div className='note1-Outline'>

                <div className="note1-inner-box">

                    <InputBase className='note1-input' placeholder="Take a note..." fullWidth />

                    <Tooltip title='New List'>
                        <IconButton aria-label="New list" size='large'>
                            <CheckBoxOutlinedIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title='New note with drawing'>
                        <IconButton aria-label="New note with drawing" size='large'>
                            <BrushIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title='New note with image'>
                        <IconButton aria-label="New note with image" size='large'>
                            <ImageOutlinedIcon />
                        </IconButton>
                    </Tooltip>


                </div>

            </div>
        </>
    )
}

export default Takenote1