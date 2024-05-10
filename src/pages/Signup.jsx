import React, { useState } from "react";

import doctor5 from "../images/doctor5.jpeg"
import doctor7 from "../images/doctor7.png";
import { Link } from "react-router-dom";
const Signup=()=>{
    const [selectedfile,setselectedFile]=useState(null);
    const [previewURL,setpreviewURL]=useState(" ");
    
    const [formdata,setformdata]=useState({
        name:'',
        email:'',
        password:"",
        photo:selectedfile,
        gender:'',
        role:'patient',
        
    })
    const handleinputchange=(e)=>{
        
        setformdata({...formdata,[e.target.name]: e.target.value});
    }
    
    //for photo
    const handlefileinputchange= async (event)=>{
        const file=event.target.files[0];
        
        //later we use cloud to set image

        console.log(file);
    }
    const submithandler=async (event)=>{
        event.preventDefault();
    }



    return(
        <>
            <section className="px-5 xl:px-0 bg-stone-900 text-gray-200">
                <div className="max-w-[1170px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="hidden lg:block  rounded-l-lg">
                            <figure className="rounded-l-lg">
                                <img src={doctor7} alt="" className="w-full rounded-l-lg"></img>
                            </figure>
                        </div>

                        {/* ==========signup form=========================================== */}


                        <div className="rounded-l-lg lg:pl-16 py-10 bg-[#2D2D2D]">
                            <h3 className="text-sky-700 text-[25px] leading-9 font-bold mb-10">Create an <span className="text-red-500">account &#128525;</span></h3>

                            <form onSubmit={submithandler}>
                            <div className="mb-5 mr-20">
                                <input type="text" placeholder="Enter Your Name" name="name" 
                                
                                value={formdata.name}
                                onChange={handleinputchange}
                                  className=" rounded-md text-center w-full
                                px-4 pr-4 py-3 border-b-primaryColor text-headingColor text-[20px] leading-7 cursor-pointer placeholder:text-textColor focus:outline outline-sky-700 outline-2" required></input>
                            </div>

                            <div className="mb-5 mr-20">
                                <input type="email" placeholder="Enter Your email" name="email" 
                                onChange={handleinputchange}
                                value={formdata.email} 
                                 className=" rounded-md text-center w-full
                                px-4 pr-4 py-3 border-b-primaryColor text-headingColor text-[20px] leading-7 cursor-pointer placeholder:text-textColor focus:outline outline-sky-700 outline-2" required></input>
                            </div>

                            <div className="mb-5 mr-20">
                                <input type="password" placeholder="Enter Your password" name="password" 
                                onChange={handleinputchange}
                                value={formdata.password}
                                 className=" rounded-md text-center w-full
                                px-4 pr-4 py-3 border-b-primaryColor text-headingColor text-[20px] leading-7 cursor-pointer placeholder:text-textColor focus:outline outline-sky-700 outline-2" required></input>
                            </div>

                            <div className="mb-5 flex items-center justify-between ">
                                <label 
                                    
                                    className=" font-bold text-[16px] leading-7 "
                                >
                                    Are you a:
                                    <select
                                    name="role"
                                    onChange={handleinputchange}
                                     value={formdata.role}
                                    className="font semi-bold text-[15px] leading-7 px-4 py-3 bg-sky-500 ml-3">
                                        <option value="patient" className="hover:bg-orange-400" >Patient</option>
                                        <option value="doctor" className="hover:bg-orange-400" >Doctor</option>
                                    </select>
                                </label>

                                <label 
                                    
                                    className=" font-bold text-[16px] leading-7 mr-20"
                                >
                                    GENDER:
                                    <select
                                    name="role"
                                    onChange={handleinputchange}
                                     value={formdata.gender}
                                    className="font-semi-bold text-[15px] leading-7 px-4 py-3 bg-sky-500 ml-3">
                                        <option value="Select" className="hover:bg-orange-400" >Select</option>
                                        <option value="Male" className="hover:bg-orange-400" > Male </option>
                                        <option value="Female" className="hover:bg-orange-400" > Female </option>
                                        <option value="other" className="hover:bg-orange-400" > Rahul hai? </option>
                                    </select>
                                </label>
                            </div>

                            <div className=" mb-5 flex items-center gap-3">
                                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor
                                flex-items-center justify-center">
                                    <img src={doctor5} alt="" className="w-full h-full rounded-full"></img>
                                </figure>
                                {/* ====================photo set section================== */}

                                <div className=" relative w-[160px] h-[50px]"> 
                                    <input type="file" name="photo" id="customerfile" 
                                        onChange={handlefileinputchange}
                                        accept=".jpg,.JPG,.JPEG,.PNG,.jpeg,.png"
                                        className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
                                        
                                    >
                                    </input>
                                    <label htmlFor="customerfile" className="absolute top-0 left-0 w-full h-full flex items-center 
                                     px-[0.75rem] py-[0.375rem] text-[20px] leading-6 overflow-hidden font-semibold rounded-lg truncate cursor-pointer capitalize text-orange-500 bg-[#0066ff46]">upload photo</label>
                                </div>
                            </div>
                            
                            <div className="sm:mr-20 ">
                                <button 
                                    type="submit"
                                    className="btn w-full text-[18px] leading-[30px] rounded-lg "
                                >Sign Up</button>
                            </div>
                            <p className="mt-3 text-red-500 text-center">Already have an account? <Link to='/login' className="text-primaryColor font-medium ml-1">Login</Link> </p>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Signup;