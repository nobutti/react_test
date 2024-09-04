import React from "react";
import {Paper,Button,Grid2,Grid,TextField,Checkbox} from "@mui/material";
import {NavLink,useNavigate} from "react-router-dom";



export const Section4 =()=>{

    const navigate = useNavigate();
    const handleClick =()=>{
        navigate("/container1", {state : { param1:"パラメータだよ"}});
      //  <NavLink to="/">トップ</NavLink>
    }

    return(
        <>
        <p>ss</p>
        <input type="text" />
        <p></p>
        <Button onClick={handleClick} sx={{border:"solid", bgcolor:"#0000ff", color:"#ffffff"}}>ss</Button>
        <Paper
         sx={{p:"7px 7px"}}
         elevation={0}
         variant="outlined"
         >
            <Grid container>
                <Grid container rowSpacing={0}>
                    <Grid item spacing={0} alignItems="center" >
                        <Grid container item xs={12} rowSpacing={0}>
                            <Grid container item spacing={0} alignItems="center">
                                <Grid item xs={2.5}>
                                    <TextField
                                    label="大勘定"
                                    name="daikanjo"
                                     />
                                </Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={1}>
                                    <TextField
                                     label="損貸"
                                     name="sonkashi"
                                     />
                                </Grid>
                                <Grid item xs={3.5}></Grid>
                                <Grid item xs={1.5} sx={{marginLeft:"auto", justifyContent:"end"}} display="grid">
                                    <Button sx={{width:"112px"}}>
                                        クリア
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
        </>
    )
}