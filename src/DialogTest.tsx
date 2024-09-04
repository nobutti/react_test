import React,{useState,useImperativeHandle,forwardRef} from "react";
import { Paper,Dialog,DialogTitle,DialogContent} from "@mui/material";

export type Props ={
    param1:string;
}

export interface DialogTestHandle {
    open:()=>void;
}

const DialogTest = forwardRef<DialogTestHandle,Props>((props:Props, ref) =>{
const [isOpen,setIsOpen] = useState(false);

    useImperativeHandle(ref,()=>({
        open:()=>{
            setIsOpen(true);
        }
    })
    )
const handleClose =()=>{
    setIsOpen(false);
}
    return(
        <>
        <Dialog
         open={isOpen}
         sx={{
            [".MuiDialog-paper"]:{
                maxHeight:"300px",
                maxWidth:"500px",
            }
         }}
         onClose={handleClose}
         >
            <DialogTitle>タイトルｘｘｘｘ</DialogTitle>
            <DialogContent
             sx={{
                height:"100%",
                width:"100%",
                padding:"0 12px 14px",
                marginTop:"9px",
             }}
            >
                <Paper sx={{p:"7px, 7px"}} elevation={0} variant="outlined">
                    <p>dddd</p>
                </Paper>
            </DialogContent>
         </Dialog>
        </>
    );
})

export default DialogTest;
