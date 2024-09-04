import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import React from "react";
import {useLocation} from "react-router-dom";

export const Container1 = () =>{
    const location = useLocation();

    const p = location.state;

    return(
        <>
        <p>{p && p.param1}</p>
        <Section1 />
        <Section2 />
        
        </>
    );
}

