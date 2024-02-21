import React from 'react'
import { useLocation } from 'react-router-dom'

const Login = () => {
    const useLoc = useLocation();
    const getLocation = () => {
        console.log(useLoc.pathname)
    }




    return (
        <>

            <div className='flex justify-center items-center h-screen w-full bg-gray-300 text-black '>
                <div id="login" className='flex justify-center flex-col h-2/5 w-96 bg-slate-400 bg-opacity-20  border-3 border-gray-500 rounded-xl'>
                    {
                        (useLoc.pathname === "/login") ? < h1 className='font-bold text-lg text-center '>Login please</h1> : < h1 className='font-bold text-lg text-center '>SignUp please</h1>
                    }
                    <div class="m-3">
                        <label for="exampleFormControlInput1" className="form-label font-bold m-1">Name : </label>
                        <input type="email" className="form-control mb-" id="exampleFormControlInput1" placeholder="name" />

                        <label for="exampleFormControlInput1" className="form-label font-bold m-1">Email address : </label>
                        <input type="email" className="form-control m-1
                                 " id="exampleFormControlInput1" placeholder="name@example.com" />

                        <label for="exampleFormControlInput1" className="form-label font-bold m-1">Password : </label>
                        <input type="password" className="form-control m-1 " id="exampleFormControlInput1" placeholder="Password" />
                        {
                            (useLoc.pathname === "/signup") && (
                                <><labellabel for="exampleFormControlInput1" className="form-label font-bold m-1">Confirm Password : </labellabel>
                                    <input type="password" className="form-control m-1" id="exampleFormControlInput1" placeholder=" Confirm Password" />
                                </>)
                        }
                    </div>

                </div>
            </div >
        </>
    )
}

export default Login;