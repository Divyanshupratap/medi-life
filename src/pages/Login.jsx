import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login=()=>{
    const [formdata,setformdata]=useState({
        email:'',
        password:''
    })
    const handleinputchange=(e)=>{
        
        setformdata({...formdata,[e.target.name]: e.target.value});
    }
    return(
        <>
            <section className="px-5 lg:px-0 bg-stone-900 text-gray-200 ">
            <div className="w-full max-w-[570px] mx-auto rounded-lg hover:cursor-pointer hover:shadow-md md:p-10 bg-[#2D2D2D] hover:shadow-red-300">
                <h3 className=" text-[22px] leading-9 font-bold mb-10 text-sky-700">Hello <span className="text-red-500">Welcome  </span> Back &#128515;</h3>

                <form className="py-4 md:py-0">
                    <div className="mb-5">
                        <input type="email" placeholder="Enter Your Email" name="email" value={formdata.email} onChange={handleinputchange} className=" rounded-md text-center w-full
                        px-4 py-3 border-b-primaryColor text-headingColor text-[20px] leading-7 cursor-pointer placeholder:text-textColor focus:outline outline-sky-700 outline-2" required></input>
                    </div>
                    <div className="mb-3">
                    <input type="password" placeholder="Enter Your Password" name="password" value={formdata.password} onChange={handleinputchange} className=" rounded-md text-center w-full
                        px-4 py-3 border-b-primaryColor text-headingColor text-[20px] leading-7 cursor-pointer placeholder:text-textColor mt-5  focus:outline outline-sky-700 outline-2" required></input>
                    </div>
                    

                    <div className="">
                        <button 
                            type="submit"
                            className="btn w-full text-[18px] leading-[30px] rounded-lg"
                        >Login</button>
                    </div>
                    <p className="mt-3 text-red-500 text-center">Don&apos;t have an account? <Link to='/signup' className="text-primaryColor font-medium ml-1">Register</Link> </p>
                </form>
            </div>
        </section>
        </>
    )
};
export default Login;