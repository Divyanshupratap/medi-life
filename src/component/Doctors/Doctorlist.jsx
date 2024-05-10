import React from "react";
import DoctirCard from "./Doctorcard";
import { doctorsdata } from "../../data/doctorsdata";
const Doctorlist=()=>{
    return (
        <>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
                {doctorsdata.map((doctor,index)=> <DoctirCard doctor={doctor} key={index} />)}
            </div>
        </>
    )
}
export default Doctorlist;