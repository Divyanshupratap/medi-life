import React, { useDeferredValue } from "react";
import { CgFormatStrike, CgMathPlus, CgPullClear } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";
import { useState } from "react";
const Faqitems=({items})=>{
    //is open variable for checkin whether minus or plus sign 
    const [isopen,setisopen]=useState(false);

    //toggle function
    const toggleAccording=()=>{
        setisopen(!isopen);
    }

    return(
        <>
        <div className="p-3 lg:p-5 rounded-md border border-solid border-[#D9DCE2] mb-2 cursor-pointer">
            <div className="flex items-center justify-between gap-4" onClick={toggleAccording}>
                <h3 className="text-[16]  lg:text-[22px] leading-8 text-headingColor ">{items.questions}</h3>
                <div className={`${isopen?" bg-yellow-500 text-white":"bg-red-400 text-black"} w-7 h-7 lg:w-8 lg:h-7 border border-solid border-[#141F21] rounded flex items-center justify-center `} onClick={toggleAccording}>
                {isopen==true?<CgMathMinus/>:<CgMathPlus/>}
                </div>
            </div>
            {isopen && <div className="mt-4">
                <p className=" border-t-4  p-4 text__para font-sans leading-5 lg:leading-7 ">{items.content}</p>    
            </div>}
        </div>
        </>
    )
}
export default Faqitems;