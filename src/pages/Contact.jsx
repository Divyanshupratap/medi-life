import React from "react";
import { GiLava } from "react-icons/gi";
import hulk3d from "../images/hulk3d.png"
import hulk4 from "../images/hulk5.png"
import doctor6 from "../images/doctor6.png";
const Contact=()=>{
    return(
        <section className="px-5 xl:px-0 bg-stone-900 text-gray-200 ">
                <div className="max-w-[1170px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="hidden lg:block  rounded-l-lg  mr-7">
                            
                            <img src={doctor6} alt="" className="w-full h-[600px] object-cover  rounded-l-lg "></img>
                            
                        </div>

                        {/* =====================contact form================================ */}


                        <div className="rounded-l-lg lg:pl-16 py-10 bg-[#2D2D2D] flex flex-col hover:shadow-xl hover:shadow-red-200">
                            <div className="justify-center">
                                <h3 className="text-sky-700 text-[35px] leading-9 font-bold mb-10 justify-center  text-center">Contact <span className="text-red-500">Us &#128736;</span></h3>
                            </div>
                            <form>
                            <div className="mb-5 mr-20">
                                <input type="text" placeholder="Enter Your Name" name="name" 
                                  className=" rounded-md text-center w-full
                                px-4 pr-4 py-3 border-b-primaryColor text-headingColor text-[20px] leading-7 cursor-pointer placeholder:text-textColor focus:outline outline-sky-700 outline-2" required></input>
                            </div>

                            <div className="mb-5 mr-20">
                                <input type="text" placeholder="Enter Your subject" name="text" 
                                
                                 className=" rounded-md text-center w-full
                                px-4 pr-4 py-3 border-b-primaryColor text-headingColor text-[20px] leading-7 cursor-pointer placeholder:text-textColor focus:outline outline-sky-700 outline-2" required></input>
                            </div>
                            <div className="mb-2 mt-5 mr-20">
                                
                                <textarea
                                    rows="8"
                                    type="text"
                                    id="message"
                                    className="w-full text-headingColor leading-7 text-[20px] text-center focus:outline outline-sky-700 outline-4" 
                                    placeholder="Enter your problem"
                                >

                                </textarea>
                            </div>
                            
                            <div className="sm:mr-20 ">
                                <button 
                                    type="submit"
                                    className="btn w-full text-[22px] leading-[30px] rounded-lg "
                                >Submit</button>
                            </div>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
    )
};
export default Contact;