import {Popover,Typography,Box,Button} from "@mui/material";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";
//◆Font Awesome
//npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//<Button variant="contained" color="primary" startIcon={<FontAwesomeIcon icon={faCoffee} />}>

//◆Heroicons
//npm install @heroicons/react
import arrow from '@heroicons/react/solid';
//<Button variant="contained" color="primary" startIcon={<HomeIcon style={{ width: 24, height: 24 }} />}>

//◆Ionicons
//npm install ionicons
//import { IonIcon } from 'react-ionicons';
// <Button variant="contained" color="primary" startIcon={<IonIcon name="heart" style={{ width: 24, height: 24 }} />}>

//◆Feather Icons
//npm install react-feather
//import { Camera } from 'react-feather';
// <Button variant="contained" color="primary" startIcon={<Camera size={24} />}>

export const PopOverTest=()=>{
    const [open,setOpen] = React.useState(false);

    const handleClick=()=>{
        setOpen(true);
    }

    const handleClose=()=>{
    setOpen(false);
    }

    return(
        <div>
        <Button variant="contained" color="primary" startIcon={<SaveIcon/>} onClick={handleClick} />
        <Popover open={open} onClose={handleClose}>
        <Box  sx={{width:"200px", height:"200px"}}>
            {/* ポップオーバーは内容に従ってサイズが決まるので <Popover sx={{width:200, height:200}}> という指定では幅が設定されない ここではBoxで指定している*/}
                {/* コンテンツをここに追 */}
                <Typography>Popover Content</Typography>
                <a href="#">xxxxxxxxxxxxxxxx</a>
                <hr />
                <a href="#">zzzzzzzzzzzzzzzz</a>
                <hr />
                <a href="#">zzzzzzzzzzzzzzzz</a>
                <hr />
                <a href="#">zzzzzzzzzzzzzzzz</a>
                <hr />
                <a href="#">zzzzzzzzzzzzzzzz</a>
            </Box>
        </Popover>
        </div>
    );
}