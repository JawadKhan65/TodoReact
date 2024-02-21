import React, { useEffect, useReducer, useRef, useState } from 'react'
import Input from './Input'
// for clear and consistent structure we use payload else than the key

const Todo = () => {
    const inputRef = useRef(null)
    const priorityRef = useRef(null)
    const [priority, setPriority] = useState("high")
    const [status, setStatus] = useState(false)


    const reducer = (state, action) => {
        if (action.type === "Add") return [...state, action.payload]
        if (action.type === "Delete") {
            return state.filter(task => task.id !== action.payload)
        }
        if (action.type === "EditStatus") {
            const updatedState = state.map(task => {
                if (task.id === action.payload) {
                    return { ...task, status: !task.status };
                }
                return task;
            });
            state = updatedState;
        }

        return state;
    }
    let intialValue;
    if (typeof window !== "undefined") {
        intialValue = JSON.parse(localStorage.getItem("task")) || []
    }

    const [state, dispatch] = useReducer(reducer, intialValue)//intialization of reducer we use state as over target (we can name as todo but here we used state to just carry on)
    // for adding tasks
    const [task, setTask] = useState('')//for tasks
    const EditStatus = (taskId) => {

        dispatch({ type: "EditStatus", payload: taskId });


    };
    const ADD = () => {
        if (task.trim() !== '' && priority !== '') {
            const Task = { id: new Date().getTime(), text: task, priority: priority, status: status }
            dispatch({ type: "Add", payload: Task })
            setTask("")
            setPriority("high")
            setStatus(false)

        }
    }
    const Delete = (taskId) => {
        dispatch({ type: "Delete", payload: taskId })
    }
    useEffect(() => {
        if (typeof window !== "undefined")
            localStorage.setItem("task", JSON.stringify(state))
    }, [state])





    return (
        <>
            <div className=' flex flex-row justify-center text-slate-700 mb-10'>
                <input
                    type="text"
                    ref={inputRef}
                    value={task}
                    onChange={e => setTask(inputRef.current.value)}
                    placeholder="Add a new task"
                    className='m-3 border-2  p-1 rounded-lg drop-shadow-lg'
                />
                <select className=' border-2  drop-shadow-lg rounded-lg p-1 h-10 m-3' ref={priorityRef} value={priority} onChange={() => setPriority(priorityRef.current.value)} >
                    <optgroup label='Priority' className='font-light bg-gray-100  border-gray-200 rounded-lg'
                    >
                        <option className='font-light ' >high</option>
                        <option className='font-light'>medium</option>
                        <option className='font-light'>low</option>
                    </optgroup>
                </select>
                <button className='  bg-indigo-300 font-mono rounded-md p-1 cursor-pointer m-3 w-16 h-10 font-bold text-slate-700' onClick={ADD}>Add</button>
            </div>

            <div className='flex flex-wrap justify-center w-screen'>

                {state.map((task) => (
                    <Input key={task.id} id={task.id} task={task.text} delete={Delete} priority={task.priority} orgStatus={task.status}
                        EditStatus={EditStatus} />
                ))}
            </div>
        </>
    )
}

export default Todo