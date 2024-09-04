import {GridReadyEvent,GridApi} from "@ag-grid-community/core";
import {AgGridReact} from "@ag-grid-community/react";
import React,{useState,useRef,useEffect} from "react";

export const Section3 =()=>{


    const columnDefs =[
        {
            headerName:"テスト１",
            name:"item1",
            width:200,
        },
        {
            headerName:"テスト２",
            name:"item2",
            width:200,
        },
    ]
const gridApiRef = useRef<any>(null);

const handleGridReady=(event:GridReadyEvent)=>{
    gridApiRef.current = event.api;
}
const rowData=[
    {
        item1:"1",
        item2:"2",
    },
    {
        item1:"3",
        item2:"4",
    },
]
//const [gridData,setGridData]:any = useState();

//useEffect(()=>{
  //  setGridData(rowDa//ta)
//}, []);

    return(
        <>
        <p>ppp</p>
        <AgGridReact
        ref={gridApiRef}
        rowData={rowData}
        columnDefs={columnDefs}
        onGridReady={handleGridReady}></AgGridReact>
        </>
    )
}