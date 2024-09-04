import {Checkbox,Grid,TextField} from "@mui/material";
import React from "react";

export const Section6=()=>{

    /* 参考URL   https://it-infomation.com/react-mui-textfield/ */

    const [val,setVal] = React.useState(false);
    const handleChange=(e:any)=>{
        setVal(e.target.checked);
    }

    return(
        <>
        <p></p>
        <p></p>
        <Grid container xs={12}>
            <Grid xs={2.2}>
                <TextField label="アイテム1xx" InputLabelProps={{shrink:true}}/>
            </Grid>
            <Grid xs={2.2}>
                <TextField label="アイテム2" InputLabelProps={{shrink:true}}/>
            </Grid>
            <Grid xs={2.2}>
               <TextField label="アイテム3" InputLabelProps={{shrink:true}}/>
           </Grid>    
           <Grid xs={2.2}>
               <TextField label="アイテム4" InputLabelProps={{shrink:true}}/>
           </Grid>    
        </Grid>
        <Grid container xs={12}>
            <div style={{marginTop:"10px"}}>有効</div><Checkbox name="11" checked={val} onChange={handleChange}></Checkbox>
        </Grid>

        </>
    )
}   