import React from "react";
import { Link } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
const DoctirCard=(props)=>{
    return(
        <>
            <div className="p-3 lg:p-5 hover:shadow-2xl hover:scale-105 hover:ease-in-out hover:cursor-pointer hover:border hover:border-solid hover:border-sky-600 bg-[#2D2D2D]">
                <div>
                    <img src={props.doctor.photo} className="w-full" alt=""></img>
                    <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 font-[700] mt-3 lg:mt-5 text-sky-700">
                        {props.doctor.name}
                    </h2>
                    <div className="mt-2 lg:mt-4 flex items-center justify-between ">
                        <span className="bg-[#2785bb] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded text-gray-200">
                            {props.doctor.specialty}
                        </span>
                        <div className="flex items-center gap-[6px]">
                            <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                            <RiStarSFill className="text-red-500 text-[40px]"/>
                            <span className="text-orange-300">
                            {props.doctor.avgRating}
                            </span>
                            </span>
                            <span className="text-[14px] leading-6 lg:leading-7 lg:text-[16px] font-[400] ">({props.doctor.totalRating})</span>
                        </div>
                    </div>
                    <div className=" mt-[18px] lg:mt-5 flex justify-between">
                        <div className="text__para leading-5 lg:leading-7 font-[400]">
                            <div className="text-gray-200"><span className="text-sky-400">+</span>{props.doctor.totalPatients} Satisfied Patients</div>
                            <div className="text-red-400">{props.doctor.hospital}</div>
                        </div>
                        <div className="">
                        <Link
                                    to="/doctors"
                                    className="w-[44px] h-[44px] rounded-full border border-solid border-sky-600 mt-[30px]
                                    mx-auto flex items-center  justify-center group  hover:bg-red-500 hover:text-white hover:border-none" 
                                >
                                    <i className="fa-solid fa-arrow-right" ></i>
                                </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default DoctirCard;