import React, { useState } from "react";
import hulk from '../../images/hulk.jpg'
import {AiFillStar} from 'react-icons/ai'
import Feedform from "./Feedform";

const Feedback=()=>
{
    const [feed,setfeed]=useState(false);
    return(
    <>
        <div className="text-gray-200">
            <div className="mb-[50px]">
                <h4 className="text-[20px] leading-[30px] font-semibold flex items-center gap-2 capitalize text-orange-400">
                    all reviews (245)
                </h4>
                <div className="flex justify-between gap-10 mb-[30px] mt-5">
                    <div className="flex gap-3">
                        <figure className="  rounded-full">
                            <img src={hulk} alt="" className="w-[50px] h-[50px] rounded-full"></img>
                        </figure>
                        <div>
                            <h5 className="text-[20px] heading leading-6 font bold text-sky-700">Divyanshu pratap</h5>
                            <p className="text-[14px] leading-6"> 05-september-24</p>
                            <p className="mt-3 font-medium text-[15px] capitalize ">Good service YOU SHOULD TRY</p>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        {
                            [...Array(5).keys()].map((_,index)=>(
                                <AiFillStar key={index} color="#b7432f"/>
                            ))
                        }
                    </div>
                </div>
            </div>  
            
            <div className="text-center"><button className="btn capitalize bg-[#b7432f] " onClick={()=>setfeed(!feed)}>give feed back </button></div> 
              {feed && <Feedform/>}
              
        </div>
    </>
    )
}
export default Feedback;