import React, { useState } from 'react'

const Input = (props) => {
    let bgcolor = "bg-orange-400";
    if (props.priority === "medium")
        bgcolor = "bg-yellow-200"
    if (props.priority === "low")
        bgcolor = "bg-green-200"

    return (
        <>

            <div className='flex flex-col  bg-slate-50 drop-shadow-lg  h-60 w-80 m-3 border-1 rounded-md'>
                <div className='flex justify-between  text-black font-bold'>
                    <div className='m-3 '>Title: {props.id}</div>
                    <div className={`float-right m-3 ${bgcolor} rounded-lg font-mono p-1`} >{props.priority}</div>
                </div>
                <div className='block h-12 m-3 text-justify  overflow-auto'>Task: {props.task}</div>
                <div className='block mb-2 ml-3 mt-3'>Status: <input type='checkbox' checked={props.orgStatus} onChange={() => props.EditStatus(props.id)} className="form-checkbox  text-green-600 p-2 h-5 w-5 "></input></div>
                <div className='flex justify-between m-2 font-medium'>
                    <button className='bg-indigo-300 font-mono rounded-sm p-1 cursor-pointer' onClick={props.edit}>edit</button>
                    <button className='float-right bg-indigo-300 font-mono rounded-sm p-1 cursor-pointer' onClick={() => props.delete(props.id)}>delete</button>
                </div>



            </div>
        </>
    )
}
// orange-400 pink-400, gray-200
export default Input