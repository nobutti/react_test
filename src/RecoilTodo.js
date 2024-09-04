import { useRecoilState, useRecoilValue } from "recoil";
import { useState} from "react";
import {todoAtom, todoLastIdSelector} from "./todoAtom";
import './StateTodo.css';

export default function RecoilTodo(){

    const [title, setTitle] = useState('');
    const [todo, setTodo] = useRecoilState(todoAtom);
    const maxId = useRecoilValue(todoLastIdSelector);

    const handleChangeTitle = e => setTitle(e.target.value);

    const handleAdd = ()=>{
        setTodo([
            ...todo,
            {
                id: maxId + 1,
                title,
                isDone: false
            }
        ]);
    };

    const handleDone = e =>{
        setTodo(todo.map(item => {
            if(item.id === Number(e.target.dataset.id)) {
                return {
                    ...item,
                    isDone: true
                };
            } else {
                return item;
            }
        }));
    };

    const handleRemove = e => {
        const x = Number(e.target.dataset.id);
            debugger;
        setTodo(todo.filter(item => item.id !== Number(e.target.dataset.id)));
        const y = todo;
        debugger;
    };



    /*
    const todo =[
        {
            id:"1",
            title:"タイトル1",
            isDone:false,
        },
        {
            id:"2",
            title:"タイトル2",
            isDone:false,
        },
        {
            id:"3",
            title:"タイトル3",
            isDone:false,
        },
    ]
*/

    return(
        <div>
            <label>
                やること
            <input type="text" name="todo" value={title} onChange={handleChangeTitle} />
            </label>
            <button type="button" onClick={handleAdd}>追加</button>
            <hr />

            <ul>
            {/* Todoリストを順に出力 */}

            {todo.map(item => (
                <li key={item.id}
                 className={item.isDone ? 'done' : ''}>
                {item.title}
                <button type="button" onClick={handleDone} data-id={item.id}>済</button>
                <button type="button" onClick={handleRemove} data-id={item.id}>削除</button>
                </li>
            ))}
            </ul>
        </div>
    )

}