
import React, { useState,useRef } from "react";
import { AgGridReact } from 'ag-grid-react';
import { GridReadyEvent,GridApi,ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import './StateTodo.css';
import './GridStyle.css';

export const GridTest = () => {

    const gridApiRef = useRef<GridApi>();
    const handleGridReady =(event:GridReadyEvent)=>{
        gridApiRef.current = event.api;
    }

    const [rowData] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ]);

    const [colDefs] = useState<ColDef[]>([
        { field: "make" ,headerName:"取引先\n口座連番"},
        { field: "model" ,headerName:"モデル"},
        { field: "price" ,headerName:"金額"},
        { field: "electric" ,headerName:"エレクトリック"}
    ]);
const handleClick=()=>{
    alert(gridApiRef.current?.getDisplayedRowCount());
}
const handleClick2=()=>{
    /* addに成功
    gridApiRef.current?.applyTransaction({
        add:[{make:"11",model:"333",price:99,electric:true}]
    })
    */

    //RowNodeIdの設定に成功
    const x =gridApiRef.current?.getRowNode("Tesla");
    debugger;
}

    return (
        <div className="ag-theme-quartz" style={{ height: 500 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                onGridReady={handleGridReady}
                getRowId={(p) =>p.data.make ?? "NEW_REGIST_ROW"}
                headerHeight={46}
                className="custom-grid"   //GridStyle.cssに内容を定義して使う。ヘッダーを2行に分けることに成功
            />
            <button onClick={handleClick}>click</button>
            <button onClick={handleClick2}>表でCRUDをしてみる</button>
        </div>
    );
}