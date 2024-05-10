import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Feedform=()=>{
    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);
    const [reviewtext,setReviewtext]=useState("");
    const handlesubmit=async (e)=>{
        e.preventDefault();
    }
    return(<>
       <form className="" action="">
            <div>
                <h3 className="text-[16px] heading leading-6 font-semibold mb-4 capitalize text-gray-200">
                    How are you rate the overall experience
                </h3>
                <div>
                    {[...Array(5).keys()].map((_,index)=>{
                        index+=1;
                        return(
                            <button key={index}
                            className={`${index<=((rating && hover)||hover)?"text-orange-400":"text-gray-200"}`}
                            type="button" 
                            onClick={()=>setRating(index)}
                            onMouseEnter={()=>setHover(index)}
                            onMouseLeave={()=>setHover(rating)}
                            onDoubleClick={()=>{
                                setHover(0)
                                setRating(0)
                            }}
                            >
                                <span>
                                    <AiFillStar/>
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className="mt-[30px]">
                    <h3 className="leading-6 font-semibold mb-4 mt-0 capitalize text-[20px] text-sky-700">
                        share kar de experience
                    </h3>
                    <textarea className="border border-solid border-[#f6171734] focus:outline outline-primaryColor  outline-2 w-full px-4 py-3 rounded-md text-black text-[20px]" rows="5"
                        placeholder="write your message"
                        onChange={(e)=>setReviewtext(e.target.value)}
                     ></textarea>
                     <button type="submit" onClick={handlesubmit} className="btn">Submit</button>
            </div>

       </form>
    </>)
}
export default Feedform;