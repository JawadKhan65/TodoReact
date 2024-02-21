import React, { useReducer } from 'react'

const Practice = () => {

    // create a form using reducer first then states
    const reducerFunction = (form, action) => {
        if (form.type === "Name") { return [...form, action.payload] }
        if (form.type === "Email") { return [...form, action.payload] }
    }
    const intialState = []
    const [form, dispatch] = useReducer(reducerFunction, intialState)

    return (
        <>
            <form>

                <label>Name</label>
                <input onChange={(e) => dispatch({ type: "Name", payload: e.target.value })}></input>


                <label>Email</label>
                <input onChange={(e) => dispatch({ type: "Email", payload: e.target.value })}></input>

            </form>
        </>
    )
}

export default Practice