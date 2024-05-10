import React from "react";
import DoctirCard from "../../component/Doctors/Doctorcard";
import { doctorsdata } from "../../data/doctorsdata";
const Doctors=()=>{
    return(
        <>
        <div className="bg-stone-900 text-gray-200">
            <section className="bg-[#2D2D2D]">
                <div className="container text-center">
                    <h2 className="heading capitalize text-sky-700 animate-bounce hover:animate-none hover:cursor-pointer">find a<span className="text-red-500"> doctor </span></h2>
                    <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
                        <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textcolor " placeholder="search here"></input>
                        <button className="btn mt-0 rounded-[0px] rounded-r-md capitalize ">search</button>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
                        {doctorsdata.map((doctor,index)=> <DoctirCard doctor={doctor} key={index} />)}
                    </div>
                </div>
            </section>
        </div>
        </>
    )
};
export default Doctors;