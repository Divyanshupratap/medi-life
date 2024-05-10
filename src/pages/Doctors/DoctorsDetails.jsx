import React, { useEffect, useState } from "react";
import doctor5 from "../../images/doctor5.jpeg";
import { MdOutlineStarPurple500 } from "react-icons/md";
import DoctrosAbout from "./DoctorsAbout";
import Feedback from "./Feedback";
import Sidepannel from "./Sidepannel";
const DoctorsDerails=()=>{
    useEffect(()=>{
        let card=document.querySelectorAll('.card');
            card.forEach((card)=>{
                card.onmousemove=function(e){
                    let x=e.pageX-card.offsetLeft;
                    let y=e.pageY-card.offsetTop;

                    card.style.setProperty('--x',x+'px');
                    card.style.setProperty('--y',y+'px');
                }
            })
    })
        
        
            const [tab,settab]=useState('about');

    return(
        <>
            <section className=" bg-stone-900">
                <div className="max-w-[1170px] px-5 mx-auto">
                    <div className="grid md:grid-cols-3 gap-[50px] ">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-5 card">
                                <figure className="max-w-[300px] max-h-[300px]">
                                    <img src={doctor5} alt="" className="w-full"></img>
                                </figure>
                                <div className=" ">
                                    <span className="bg-[#b7432f] text-irisBlueColor py-1 px-6 lg:py-2 text-[12px] leading-4 
                                    lg:text-[16px] lg:leading-7 font-semibold rounded text-gray-200">Surgon</span>
                                    <h3 className="  text-[22px] leading-9 mt-3 font-bold text-sky-700">
                                        Divyanshu pratap
                                    </h3>
                                    <div className="flex items-center gap-[6px]">
                                        <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                                            <MdOutlineStarPurple500  className="text-[28px] text-red-500"/>
                                            <span className="text-[20px] text-amber-400">4.8</span> 
                                        </span>
                                    </div>
                                    <p className="text-gray-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est perspiciatis quisquam officia soluta consequuntur natus.</p>
                                </div>
                            </div>

                            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                                <button className={`${tab==='about' && 'border-b-4 border-solid border-red-500'} py-2 px-5 mr-5 text-[16px] leading-7 text-gray-200 font-semibold`} onClick={()=>settab('about')}>About</button>
                                <button className={`${tab==='feed' && 'border-b-4 border-solid border-red-500'} py-2 px-5 mr-5 text-[16px] leading-7 text-gray-200 font-semibold`} onClick={()=>settab('feed')}>Feed Back</button>
                            </div>
                            
                            <div className="mt-[50px]">
                                {
                                    tab==='about'&& <DoctrosAbout/>
                                }
                                {
                                    tab==='feed'&& <Feedback/>
                                }
                            </div>
                        </div>

                        <div>
                            <Sidepannel/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
};
export default DoctorsDerails;