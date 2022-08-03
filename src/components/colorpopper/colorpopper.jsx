import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLens';
import { IconButton, OutlinedInput } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import './colorpopper.css'
import '../takenote2/takenote2.css'
import { updateColor } from '../../services/dataservice';


function ColorPopper(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const colorArray = ['#ffffff','#e2725b', '#ffae42', '#fefe33', '#77dd77', '#40e0d0', '#a4dded', '#77b5fe', '#ba55d3', '#ffb3de', '#c19a6b', '#d3d3d3']

    const takeColor = (color) => {
        console.log(color);
        if (props.action == 'create') {
            props.listenToPopper(color);

        }
        else if(props.action == 'update'){
              let data = {
                
                    notesId: props.id,
                    colour: color 
              }  
              updateColor(data).then((response) => {console.log(response)}).catch((error) => console.log(error))
        }


    }





    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            {/* <img src={ColorLensIcon} aria-describedby={id} type="button" onClick={handleClick} /> */}

            <ColorLensOutlinedIcon onClick={handleClick} />



            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: "flex" }} className='color-popper-box'>
                    {colorArray.map((color) => (
                        <div className='color-popper' onClick={() => takeColor(color)} style={{ backgroundColor: color }}></div>
                    ))}
                </Box>
            </Popper>
        </div>
    );
}

export default ColorPopper;

// style={{ width: 35, height: 35, borderRadius: 50, backgroundColor: color, marginLeft: 10 }}