import {atom, selector} from "recoil";

export const todoAtom = atom({
   key:'todosAtom',
   default:[
    {
        id:1,
        title:"タイトル1",
        isDone:false,
    },
    {
        id:2,
        title:"タイトル2",
        isDone:false,
    },
    {
        id:3,
        title:"タイトル3",
        isDone:false,
    },
    ]

});

export const todoLastIdSelector = selector({
    key: 'todoLastIdSelector',
    get:({ get }) => {
        // Todoリストの最後のTodoを取得するように設定
        const todo = get(todoAtom);
        return todo.at(-1)?.id ?? 0;
    }
})