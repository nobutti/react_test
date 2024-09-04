import React,{useRef} from "react";
import { useNavigate} from "react-router-dom";
import DialogTest,{DialogTestHandle} from "./DialogTest";
import {Button} from "@mui/material";
export const Section2 =()=>{

    const dialogRef = useRef<DialogTestHandle>(null);
    const navigate = useNavigate();

    const handleClick=()=>{
        dialogRef.current?.open();
    }

    return(
        <>
        <Button onClick={handleClick}>click</Button>
        <DialogTest ref={dialogRef} param1={"11"} />    
        </>
    )
}