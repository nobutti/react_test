import React from "react";
import {useRecoilState,useResetRecoilState} from "recoil";
import {RecoilAtom} from "./RecoilAtom";

export const RecoilCounter = () => {
    const [counter, setCounter] = useRecoilState(RecoilAtom);
    const resetCounter = useResetRecoilState(RecoilAtom);
    /* 以下のようにhandleClearの中に入れることはできない。エラーになる
    const handleClear=()=>{
        useResetRecoilState(RecoilAtom);
    }
    */


    const handleClick = () => {
        setCounter(c => c + 1);
    }

    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <button onClick={resetCounter}>カウンタリセット</button>
            <p>{counter}回クリックされました。</p>
        </>
    )
}