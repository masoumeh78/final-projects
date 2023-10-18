import React, { useState } from "react";

function TodoApp() {

    const [inputTask, setInputTask] = useState("");
    const [list, setList] = useState<any>([]);

    //  FUNCTIONS  //

    const handleInputChange = (event: any) => {
        setInputTask(event.target.value)
    }
    const handleAddTodo = (todo: any) => {
        console.log("=========>" + inputTask)
        if (inputTask !== "") {
            const newTask = { id: Math.random(), text: todo, done: false }
            setList([...list, newTask]);
            setInputTask("")
        }
    }
    const handleDeleteTodo = (id: any) => {
        const newList = list.filter((todo: any) => todo.id !== id);
        setList(newList);
    }
    const handleTaskCompleted = (id: any) => {
        const updatedTasks = list.map((todo:any)=>{
            if (id === todo.id){
                return {...list, done: !todo.completed};
            }
            return todo;
        })
        console.log(list)
    }
        return (
            <>
                <h1>Add ypur todos</h1>
                <div>
                    <input type="text" value={inputTask} onChange={handleInputChange} />
                    <button onClick={() => handleAddTodo(inputTask)}>ADD</button>
                </div>
                <div>
                    <h2>Your Tasks</h2>
                    <ul>
                        {list.map((item: any) => (
                            <li key={item.id}>
                                <input type="checkbox" value={item.done} onClick={() => handleTaskCompleted(item.id)} />
                                {item.text}
                                <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
                            </li>

                        ))}

                    </ul>
                </div>
            </>
        )
    }
    export default TodoApp;