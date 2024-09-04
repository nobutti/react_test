import React from 'react';
import './App.css';
import {MyForm} from "./MyForm";
import {Section1} from "./Section1";
import {Section2} from "./Section2";
import {Section3} from "./Section3";
import {Section4} from "./Section4";
import {Section5} from "./Section5";
import {Section6} from "./Section6";
import {GridTest} from "./GridTest";
import {Test} from "./Test";
import ReactMotion from "./ReactMotion";
import {PopOverTest} from "./popOverTest";
import {Container1} from "./Container1";
import {RecoilCounter} from "./RecoilCounter";
import RecoilTodo from "./RecoilTodo";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {RecoilRoot} from "recoil";

import CustomizedInputs from "./CustomizedInputs";

function App() {
  return (
    <RecoilRoot>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MyForm />} />
      <Route path="/test" element={<Test />} />
      <Route path="/container1" element={<Container1 />} />
      <Route path="/section4" element={<Section4 />} />
      <Route path="/section5" element={<Section5 />} />
      <Route path="/section6" element={<Section6 />} />
      <Route path="/recoilCounter" element={<RecoilCounter />} />
      <Route path="/recoilTodo" element={<RecoilTodo />} />
      <Route path="/gridTest" element={<GridTest />} />
      <Route path="/custInputs" element={<CustomizedInputs/>} />
      <Route path="/reactMotion" element={<ReactMotion/>} />
      <Route path="/popoverTest" element={<PopOverTest/>}/>
    </Routes>
    </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
